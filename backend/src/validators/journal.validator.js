const { z } = require('zod');

// Schema for creating a new journal entry
const createJournalSchema = z.object({
  title: z.string().min(1, 'Title is required').max(200, 'Title is too long'),
  content: z.string().min(1, 'Journal content is required'),
  mood: z.enum(['HAPPY', 'SAD', 'NEUTRAL', 'STRESSED', 'ANGRY']).optional(),
});

// Schema for updating an existing journal entry
const updateJournalSchema = z.object({
  title: z.string().min(1, 'Title is required').max(200, 'Title is too long').optional(),
  content: z.string().min(1, 'Journal content is required').optional(),
  mood: z.enum(['HAPPY', 'SAD', 'NEUTRAL', 'STRESSED', 'ANGRY']).optional(),
}).refine(data => Object.keys(data).length > 0, {
  message: "At least one field must be provided for update",
});

module.exports = {
  createJournalSchema,
  updateJournalSchema,
};
