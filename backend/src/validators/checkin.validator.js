const { z } = require('zod');

// Schema for creating a new mood check-in
const createCheckinSchema = z.object({
  mood: z.enum(['HAPPY', 'SAD', 'NEUTRAL', 'STRESSED', 'ANGRY'], {
    required_error: 'Mood is required',
    invalid_type_error: 'Invalid mood type',
  }),
  quote: z.string().optional().nullable(),
  tasks: z.array(z.string()).optional().default([]),
});

module.exports = {
  createCheckinSchema,
};
