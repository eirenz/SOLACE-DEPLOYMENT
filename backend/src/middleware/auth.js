const { verifyAccessToken } = require('../utils/tokens');
const prisma = require('../config/db');

/**
 * JWT Authentication Middleware
 * Verifies the access token from the Authorization header
 * and attaches the user to req.user
 */
const authenticate = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ error: 'Access token required' });
    }

    const token = authHeader.split(' ')[1];
    const decoded = verifyAccessToken(token);

    // Fetch user to ensure they still exist and are active
    const user = await prisma.user.findUnique({
      where: { id: decoded.userId },
      select: {
        id: true,
        email: true,
        fullName: true,
        role: true,
        status: true,
      },
    });

    if (!user) {
      return res.status(401).json({ error: 'User no longer exists' });
    }

    if (user.status === 'SUSPENDED') {
      return res.status(403).json({ error: 'Account has been suspended' });
    }

    req.user = user;
    next();
  } catch (error) {
    if (error.name === 'TokenExpiredError') {
      return res.status(401).json({ error: 'Access token expired' });
    }
    return res.status(401).json({ error: 'Invalid access token' });
  }
};

module.exports = { authenticate };
