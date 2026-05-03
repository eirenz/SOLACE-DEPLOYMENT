const express = require('express');
const router = express.Router();
const { validate } = require('../middleware/validate');
const { authenticate } = require('../middleware/auth');
const { authLimiter, otpLimiter } = require('../middleware/rateLimiter');
const {
  registerSchema,
  loginSchema,
  forgotPasswordSchema,
  verifyCodeSchema,
  resetPasswordSchema,
} = require('../validators/auth.validators');
const {
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
} = require('../controllers/auth.controller');

// Public routes (with rate limiting)
router.post('/register', authLimiter, validate(registerSchema), register);
router.post('/login', authLimiter, validate(loginSchema), login);
router.post('/admin-login', authLimiter, validate(loginSchema), adminLogin);
router.post('/google', authLimiter, googleLogin);
router.post('/facebook', authLimiter, facebookLogin);
router.post('/refresh', refreshToken);
router.post('/logout', logout);
router.post('/forgot-password', authLimiter, validate(forgotPasswordSchema), forgotPassword);
router.post('/verify-code', otpLimiter, validate(verifyCodeSchema), verifyCode);
router.post('/reset-password', otpLimiter, validate(resetPasswordSchema), resetPassword);

// Protected routes
router.get('/me', authenticate, getMe);

module.exports = router;
