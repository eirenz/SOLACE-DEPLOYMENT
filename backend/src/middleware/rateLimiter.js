const rateLimit = require('express-rate-limit');

/**
 * Rate Limiter for Authentication Endpoints
 * Protects against brute-force attacks on login, registration, and password reset flows.
 * 
 * Uses in-memory store (default). For multi-instance deployments, 
 * swap to a Redis-backed store.
 */

// General auth limiter: 10 attempts per 15-minute window
const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 10,
  message: { error: 'Too many attempts. Please try again after 15 minutes.' },
  standardHeaders: true,
  legacyHeaders: false,
});

// Strict limiter for OTP verification: 5 attempts per 15-minute window
const otpLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5,
  message: { error: 'Too many verification attempts. Please try again after 15 minutes.' },
  standardHeaders: true,
  legacyHeaders: false,
});

module.exports = { authLimiter, otpLimiter };
