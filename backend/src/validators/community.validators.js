const { z } = require('zod');

const createPostSchema = z.object({
  title: z.string().min(1, 'Title is required').max(200, 'Title must be 200 characters or less'),
  content: z.string().min(1, 'Content is required').max(10000, 'Content must be 10,000 characters or less'),
  tag: z.string().max(50).optional(),
  imageUrl: z.string().max(500000).optional().nullable(), // base64 images can be large
  emoji: z.string().max(10).optional().nullable(),
  isAnonymous: z.boolean().optional(),
});

const createReplySchema = z.object({
  content: z.string().min(1, 'Reply content is required').max(5000, 'Reply must be 5,000 characters or less'),
});

const reportPostSchema = z.object({
  reason: z.string().max(500, 'Reason must be 500 characters or less').optional(),
});

module.exports = {
  createPostSchema,
  createReplySchema,
  reportPostSchema,
};
