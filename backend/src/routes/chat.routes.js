const express = require('express');
const router = express.Router();
const { authenticate } = require('../middleware/auth');
const { roleGuard } = require('../middleware/roleGuard');
const {
  getOrCreateSession,
  getSessionMessages,
  getCounselorSessions,
  getStudentSessions,
  saveMessage,
} = require('../controllers/chat.controller');

// Student: start or resume a chat session with a counselor
router.post('/session', authenticate, roleGuard('STUDENT'), getOrCreateSession);

// Student or Counselor: get message history for a session
router.get('/session/:sessionId/messages', authenticate, getSessionMessages);

// Student or Counselor: post a message (REST fallback; primary is Socket.io)
router.post('/session/:sessionId/messages', authenticate, saveMessage);

// Counselor: get all their active chat sessions
router.get('/sessions', authenticate, roleGuard('COUNSELOR'), getCounselorSessions);

// Student: get all their chat sessions (active + closed)
router.get('/student-sessions', authenticate, roleGuard('STUDENT'), getStudentSessions);

module.exports = router;
