const express = require('express');
const { getMyNotifications, markAsRead, markAllAsRead } = require('../controllers/notification.controller');
const { authenticate } = require('../middleware/auth');

const router = express.Router();

router.use(authenticate); // All notification routes require authentication

router.get('/', getMyNotifications);
router.patch('/mark-all-read', markAllAsRead);
router.patch('/:id/read', markAsRead);

module.exports = router;
