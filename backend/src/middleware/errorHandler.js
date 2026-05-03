/**
 * Global Error Handler Middleware
 * Catches unhandled errors and returns consistent JSON responses
 */
const errorHandler = (err, req, res, next) => {
  console.error('❌ Error:', err.message);
  
  // Prisma known errors
  if (err.code === 'P2002') {
    return res.status(409).json({
      error: 'Duplicate entry',
      message: `A record with this ${err.meta?.target?.join(', ')} already exists`,
    });
  }

  if (err.code === 'P2025') {
    return res.status(404).json({
      error: 'Not found',
      message: 'The requested record was not found',
    });
  }

  // Zod validation errors
  if (err.name === 'ZodError') {
    return res.status(400).json({
      error: 'Validation error',
      details: err.errors.map(e => ({
        field: e.path.join('.'),
        message: e.message,
      })),
    });
  }

  // JWT errors
  if (err.name === 'JsonWebTokenError' || err.name === 'TokenExpiredError') {
    return res.status(401).json({ error: 'Invalid or expired token' });
  }

  // Default server error
  const statusCode = err.statusCode || 500;
  res.status(statusCode).json({
    error: err.message || 'Internal server error',
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack }),
  });
};

module.exports = errorHandler;
