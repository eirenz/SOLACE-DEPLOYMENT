/**
 * Zod Validation Middleware
 * Takes a Zod schema and validates req.body against it
 * 
 * Usage: router.post('/route', validate(mySchema), handler)
 */
const validate = (schema) => {
  return (req, res, next) => {
    try {
      const result = schema.parse(req.body);
      req.body = result; // Replace body with parsed (cleaned) data
      next();
    } catch (error) {
      if (error.name === 'ZodError' || error.issues || error.errors) {
        const issues = error.issues || error.errors || [];
        return res.status(400).json({
          error: 'Validation error',
          details: issues.map(e => ({
            field: e.path ? e.path.join('.') : 'unknown',
            message: e.message,
          })),
        });
      }
      next(error);
    }
  };
};

module.exports = { validate };
