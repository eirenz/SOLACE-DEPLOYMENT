const bcrypt = require('bcryptjs');
const prisma = require('../config/db');
const { generateAccessToken, generateRefreshToken, verifyRefreshToken } = require('../utils/tokens');
const { generateAlias } = require('../utils/aliasGenerator');
const { OAuth2Client } = require('google-auth-library');
const axios = require('axios');
const nodemailer = require('nodemailer');
const dns = require('dns');

// Force IPv4 to prevent Render ENETUNREACH errors with Gmail's IPv6
if (dns.setDefaultResultOrder) {
  dns.setDefaultResultOrder('ipv4first');
}

const googleClient = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

/**
 * POST /api/auth/register
 * Register a new student account
 */
const register = async (req, res, next) => {
  try {
    const { fullName, email, password } = req.body;

    // Check if user already exists
    const existing = await prisma.user.findUnique({ where: { email } });
    if (existing) {
      return res.status(409).json({ error: 'An account with this email already exists' });
    }

    // Hash password
    const salt = await bcrypt.genSalt(12);
    const passwordHash = await bcrypt.hash(password, salt);

    // Generate anonymous alias
    const alias = generateAlias();

    // Create user
    const user = await prisma.user.create({
      data: {
        fullName,
        email,
        passwordHash,
        role: 'STUDENT',
        alias,
      },
      select: {
        id: true,
        fullName: true,
        email: true,
        role: true,
        alias: true,
        createdAt: true,
      },
    });

    // Generate tokens
    const accessToken = generateAccessToken({ userId: user.id, role: user.role });
    const refreshToken = generateRefreshToken({ userId: user.id });

    // Set refresh token as httpOnly cookie
    res.cookie('refreshToken', refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'lax',
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    });

    res.status(201).json({
      message: 'Account created successfully',
      user,
      token: accessToken,
      role: user.role,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * POST /api/auth/login
 * Login for students and counselors
 */
const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    // Find user
    const user = await prisma.user.findUnique({
      where: { email },
      select: {
        id: true,
        fullName: true,
        email: true,
        passwordHash: true,
        role: true,
        alias: true,
        status: true,
        avatarUrl: true,
      },
    });

    if (!user) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    if (user.status === 'SUSPENDED') {
      return res.status(403).json({ error: 'Your account has been suspended. Please contact support.' });
    }

    if (!user.passwordHash) {
      return res.status(401).json({ error: 'This account was created using a Social Login. Please log in using Google or Facebook.' });
    }

    // Verify password
    const isMatch = await bcrypt.compare(password, user.passwordHash);
    if (!isMatch) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    // Generate tokens
    const accessToken = generateAccessToken({ userId: user.id, role: user.role });
    const refreshToken = generateRefreshToken({ userId: user.id });

    res.cookie('refreshToken', refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'lax',
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    // Remove passwordHash from response
    const { passwordHash: _, ...userData } = user;

    res.json({
      message: 'Login successful',
      user: userData,
      token: accessToken,
      role: user.role,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * POST /api/auth/admin-login
 * Admin-specific login
 */
const adminLogin = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const user = await prisma.user.findUnique({
      where: { email },
      select: {
        id: true,
        fullName: true,
        email: true,
        passwordHash: true,
        role: true,
        status: true,
      },
    });

    if (!user || user.role !== 'ADMIN') {
      return res.status(401).json({ error: 'Invalid admin credentials' });
    }

    if (!user.passwordHash) {
      return res.status(401).json({ error: 'Invalid admin credentials' });
    }

    const isMatch = await bcrypt.compare(password, user.passwordHash);
    if (!isMatch) {
      return res.status(401).json({ error: 'Invalid admin credentials' });
    }

    const accessToken = generateAccessToken({ userId: user.id, role: user.role });
    const refreshToken = generateRefreshToken({ userId: user.id });

    res.cookie('refreshToken', refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'lax',
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    const { passwordHash: _, ...userData } = user;

    res.json({
      message: 'Admin login successful',
      user: userData,
      token: accessToken,
      role: user.role,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * POST /api/auth/refresh
 * Refresh access token using refresh token cookie
 */
const refreshToken = async (req, res, next) => {
  try {
    const token = req.cookies.refreshToken;

    if (!token) {
      return res.status(401).json({ error: 'Refresh token not found' });
    }

    const decoded = verifyRefreshToken(token);
    
    const user = await prisma.user.findUnique({
      where: { id: decoded.userId },
      select: { id: true, role: true, status: true },
    });

    if (!user || user.status === 'SUSPENDED') {
      return res.status(401).json({ error: 'Invalid refresh token' });
    }

    const newAccessToken = generateAccessToken({ userId: user.id, role: user.role });

    res.json({ token: newAccessToken });
  } catch (error) {
    return res.status(401).json({ error: 'Invalid or expired refresh token' });
  }
};

/**
 * POST /api/auth/logout
 * Clear refresh token cookie
 */
const logout = (req, res) => {
  res.clearCookie('refreshToken', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'lax',
  });
  res.json({ message: 'Logged out successfully' });
};

/**
 * POST /api/auth/forgot-password
 * Generate and store a 6-digit OTP (in production: send via email)
 */
const forgotPassword = async (req, res, next) => {
  try {
    const { email } = req.body;

    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      // Don't reveal whether the email exists
      return res.json({ message: 'If an account with that email exists, a verification code has been sent.' });
    }

    // Generate 6-digit OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    const otpExpiry = new Date(Date.now() + 10 * 60 * 1000); // 10 minutes

    // Hash OTP before storing
    const salt = await bcrypt.genSalt(10);
    const hashedOtp = await bcrypt.hash(otp, salt);

    await prisma.user.update({
      where: { email },
      data: {
        resetOtp: hashedOtp,
        resetOtpExpiry: otpExpiry,
      },
    });

    console.log(`📧 Attempting to send OTP to: ${email}`);
    console.log(`🔧 GMAIL_USER defined: ${!!process.env.GMAIL_USER}`);
    console.log(`🔧 GMAIL_PASS length: ${process.env.GMAIL_PASS?.length || 0}`);

    if (process.env.GMAIL_USER && process.env.GMAIL_PASS) {
      try {
        const transporter = nodemailer.createTransport({
          // Hardcoding Google's direct IPv4 to bypass Render's firewall/DNS bugs
          host: '74.125.142.108', 
          port: 465,
          secure: true,
          auth: {
            user: process.env.GMAIL_USER,
            pass: process.env.GMAIL_PASS,
          },
          debug: true,
          logger: true,
          connectionTimeout: 20000, // 20s
          greetingTimeout: 20000,
          socketTimeout: 20000,
          tls: {
            servername: 'smtp.gmail.com',
            rejectUnauthorized: false
          }
        });

        // Verify connection configuration
        transporter.verify(function (error, success) {
          if (error) {
            console.error('❌ SMTP Verification Error:', error);
          } else {
            console.log('✅ SMTP Server is ready to take our messages');
          }
        });

        const mailOptions = {
          from: `"Solace Support" <${process.env.GMAIL_USER}>`,
          to: email,
          subject: 'Your Password Reset Code',
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 500px; margin: 0 auto; padding: 20px; border: 1px solid #E0E0E0; border-radius: 12px;">
              <h2 style="color: #00BCD4; text-align: center;">Solace Password Reset</h2>
              <p>Hi there,</p>
              <p>We received a request to reset your password. Here is your 6-digit verification code:</p>
              <div style="background-color: #F8FAFB; padding: 15px; text-align: center; font-size: 24px; font-weight: bold; letter-spacing: 5px; color: #1A1A2E; border-radius: 8px; margin: 20px 0;">
                ${otp}
              </div>
              <p style="color: #666666; font-size: 14px;">This code will expire in 10 minutes. If you did not request this, you can safely ignore this email.</p>
              <hr style="border: none; border-top: 1px solid #EEEEEE; margin: 20px 0;" />
              <p style="color: #999999; font-size: 12px; text-align: center;">&copy; ${new Date().getFullYear()} Project Solace</p>
            </div>
          `,
        };

        transporter.sendMail(mailOptions)
          .then(() => console.log(`✉️ Password reset email sent to ${email}`))
          .catch((mailError) => {
            console.error('Failed to send OTP email:', mailError);
            console.log(`🔑 Password reset OTP for ${email}: ${otp} (Email failed)`);
          });
      } catch (setupError) {
        console.error('Failed to setup nodemailer:', setupError);
        console.log(`🔑 Password reset OTP for ${email}: ${otp} (Email setup failed)`);
      }
    } else {
      // For development, log it
      console.log(`🔑 Password reset OTP for ${email}: ${otp} (No GMAIL credentials)`);
    }

    res.json({ message: 'If an account with that email exists, a verification code has been sent.' });
  } catch (error) {
    next(error);
  }
};

/**
 * POST /api/auth/verify-code
 * Verify the 6-digit OTP code
 */
const verifyCode = async (req, res, next) => {
  try {
    const { email, code } = req.body;

    const user = await prisma.user.findUnique({ where: { email } });
    if (!user || !user.resetOtp || !user.resetOtpExpiry) {
      return res.status(400).json({ error: 'Invalid or expired verification code' });
    }

    // Check expiry
    if (new Date() > user.resetOtpExpiry) {
      return res.status(400).json({ error: 'Verification code has expired' });
    }

    // Verify OTP
    const isValid = await bcrypt.compare(code, user.resetOtp);
    if (!isValid) {
      return res.status(400).json({ error: 'Invalid verification code' });
    }

    res.json({ message: 'Code verified successfully', verified: true });
  } catch (error) {
    next(error);
  }
};

/**
 * POST /api/auth/reset-password
 * Set new password after OTP verification
 */
const resetPassword = async (req, res, next) => {
  try {
    const { email, code, newPassword } = req.body;

    const user = await prisma.user.findUnique({ where: { email } });
    if (!user || !user.resetOtp) {
      return res.status(400).json({ error: 'Invalid request' });
    }

    // Verify OTP one more time
    const isValid = await bcrypt.compare(code, user.resetOtp);
    if (!isValid) {
      return res.status(400).json({ error: 'Invalid verification code' });
    }

    // Hash new password
    const salt = await bcrypt.genSalt(12);
    const passwordHash = await bcrypt.hash(newPassword, salt);

    await prisma.user.update({
      where: { email },
      data: {
        passwordHash,
        resetOtp: null,
        resetOtpExpiry: null,
      },
    });

    res.json({ message: 'Password reset successfully' });
  } catch (error) {
    next(error);
  }
};

/**
 * POST /api/auth/google
 * Google OAuth Login/Registration
 */
const googleLogin = async (req, res, next) => {
  try {
    const { token } = req.body;
    
    // Verify Google token
    const ticket = await googleClient.verifyIdToken({
      idToken: token,
      audience: process.env.GOOGLE_CLIENT_ID || '219508067153-l1hi9p3psonc5llundrvi02dc79d93i6.apps.googleusercontent.com',
    });
    const payload = ticket.getPayload();
    const { email, name, sub: googleId, picture: avatarUrl } = payload;

    // Check if user exists
    let user = await prisma.user.findUnique({ where: { email } });

    if (user) {
      if (user.status === 'SUSPENDED') {
        return res.status(403).json({ error: 'Your account has been suspended.' });
      }
      
      // Update googleId if not linked yet
      if (!user.googleId) {
        user = await prisma.user.update({
          where: { id: user.id },
          data: { googleId, avatarUrl: user.avatarUrl || avatarUrl },
        });
      }
    } else {
      // Register new user via Google
      const alias = generateAlias();
      user = await prisma.user.create({
        data: {
          fullName: name,
          email,
          googleId,
          role: 'STUDENT',
          alias,
          avatarUrl,
        },
      });
    }

    // Generate tokens
    const accessToken = generateAccessToken({ userId: user.id, role: user.role });
    const refreshToken = generateRefreshToken({ userId: user.id });

    res.cookie('refreshToken', refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'lax',
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    const { passwordHash: _, ...userData } = user;

    res.json({
      message: 'Google login successful',
      user: userData,
      token: accessToken,
      role: user.role,
    });
  } catch (error) {
    console.error('Google Auth Error:', error);
    res.status(401).json({ error: 'Invalid Google token' });
  }
};

/**
 * POST /api/auth/facebook
 * Facebook OAuth Login/Registration
 */
const facebookLogin = async (req, res, next) => {
  try {
    const { accessToken } = req.body;
    
    // Verify Facebook token
    const { data } = await axios.get(`https://graph.facebook.com/me?fields=id,name,email,picture&access_token=${accessToken}`);
    
    if (!data.email) {
      return res.status(400).json({ error: 'Facebook account must have an associated email address.' });
    }

    const { email, name, id: facebookId } = data;
    const avatarUrl = data.picture?.data?.url;

    let user = await prisma.user.findUnique({ where: { email } });

    if (user) {
      if (user.status === 'SUSPENDED') {
        return res.status(403).json({ error: 'Your account has been suspended.' });
      }

      if (!user.facebookId) {
        user = await prisma.user.update({
          where: { id: user.id },
          data: { facebookId, avatarUrl: user.avatarUrl || avatarUrl },
        });
      }
    } else {
      const alias = generateAlias();
      user = await prisma.user.create({
        data: {
          fullName: name,
          email,
          facebookId,
          role: 'STUDENT',
          alias,
          avatarUrl,
        },
      });
    }

    // Generate tokens
    const appAccessToken = generateAccessToken({ userId: user.id, role: user.role });
    const appRefreshToken = generateRefreshToken({ userId: user.id });

    res.cookie('refreshToken', appRefreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'lax',
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    const { passwordHash: _, ...userData } = user;

    res.json({
      message: 'Facebook login successful',
      user: userData,
      token: appAccessToken,
      role: user.role,
    });
  } catch (error) {
    console.error('Facebook Auth Error:', error);
    res.status(401).json({ error: 'Invalid Facebook token' });
  }
};

/**
 * GET /api/auth/me
 * Get current authenticated user
 */
const getMe = async (req, res, next) => {
  try {
    const user = await prisma.user.findUnique({
      where: { id: req.user.id },
      select: {
        id: true,
        fullName: true,
        email: true,
        role: true,
        alias: true,
        status: true,
        avatarUrl: true,
        createdAt: true,
      },
    });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.json({ user });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  register,
  login,
  adminLogin,
  googleLogin,
  facebookLogin,
  refreshToken,
  logout,
  forgotPassword,
  verifyCode,
  resetPassword,
  getMe,
};
