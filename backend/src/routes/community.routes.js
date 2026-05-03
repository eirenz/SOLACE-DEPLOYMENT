const express = require('express');
const router = express.Router();
const communityController = require('../controllers/community.controller');
const { authenticate } = require('../middleware/auth');
const { validate } = require('../middleware/validate');
const { createPostSchema, createReplySchema } = require('../validators/community.validators');

// Apply auth middleware to all community routes
router.use(authenticate);

router.get('/', communityController.getPosts);
router.post('/', validate(createPostSchema), communityController.createPost);
router.post('/:id/reply', validate(createReplySchema), communityController.createReply);
router.post('/:id/report', communityController.reportPost);
router.post('/:id/like', communityController.toggleLike);
router.delete('/:id', communityController.deletePost);

module.exports = router;

