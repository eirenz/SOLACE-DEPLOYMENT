const prisma = require('../config/db');

/**
 * POST /api/chat/session
 * Get or create an active chat session between student and chosen counselor (STUDENT)
 * Body: { counselorId }
 */
const getOrCreateSession = async (req, res) => {
  try {
    const { counselorId } = req.body;
    const studentId = req.user.id;

    if (!counselorId) {
      return res.status(400).json({ error: 'counselorId is required' });
    }

    // Verify counselor exists
    const counselor = await prisma.user.findFirst({
      where: { id: counselorId, role: 'COUNSELOR', status: 'ACTIVE' },
      select: { id: true, fullName: true, avatarUrl: true },
    });
    if (!counselor) {
      return res.status(404).json({ error: 'Counselor not found' });
    }

    // Find existing ACTIVE session or create new one
    let session = await prisma.chatSession.findFirst({
      where: { studentId, counselorId, status: 'ACTIVE' },
      include: {
        counselor: { select: { id: true, fullName: true, avatarUrl: true } },
        student: { select: { id: true, fullName: true, alias: true } },
      },
    });

    if (!session) {
      session = await prisma.chatSession.create({
        data: { studentId, counselorId, mode: 'ADVICE_RECOVERY', status: 'ACTIVE' },
        include: {
          counselor: { select: { id: true, fullName: true, avatarUrl: true } },
          student: { select: { id: true, fullName: true, alias: true } },
        },
      });

      // Notify counselor of new chat session
      const io = req.app.get('io');
      if (io) {
        io.to(`counselor_${counselorId}`).emit('new_chat_session', {
          sessionId: session.id,
          studentAlias: session.student.alias || session.student.fullName,
        });
      }
    }

    res.json({ session });
  } catch (error) {
    console.error('getOrCreateSession error:', error);
    res.status(500).json({ error: 'Failed to create chat session' });
  }
};

/**
 * GET /api/chat/session/:sessionId/messages
 * Fetch paginated messages for a session (STUDENT or COUNSELOR)
 * Query: page, limit
 */
const getSessionMessages = async (req, res) => {
  try {
    const { sessionId } = req.params;
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 50;
    const skip = (page - 1) * limit;

    // Verify access: user must be student or counselor of this session
    const session = await prisma.chatSession.findFirst({
      where: {
        id: sessionId,
        OR: [{ studentId: req.user.id }, { counselorId: req.user.id }],
      },
    });
    if (!session) {
      return res.status(404).json({ error: 'Session not found or access denied' });
    }

    const messages = await prisma.chatMessage.findMany({
      where: { sessionId },
      include: {
        sender: { select: { id: true, fullName: true, role: true, avatarUrl: true } },
      },
      orderBy: { createdAt: 'asc' },
      skip,
      take: limit,
    });

    const total = await prisma.chatMessage.count({ where: { sessionId } });

    res.json({ messages, total, page, limit });
  } catch (error) {
    console.error('getSessionMessages error:', error);
    res.status(500).json({ error: 'Failed to fetch messages' });
  }
};

/**
 * GET /api/chat/sessions
 * Fetch all active chat sessions for the logged-in counselor (COUNSELOR)
 */
const getCounselorSessions = async (req, res) => {
  try {
    const sessions = await prisma.chatSession.findMany({
      where: { counselorId: req.user.id, status: 'ACTIVE' },
      include: {
        student: { select: { id: true, fullName: true, alias: true, avatarUrl: true } },
        messages: {
          orderBy: { createdAt: 'desc' },
          take: 1, // Latest message preview
          select: { content: true, createdAt: true },
        },
      },
      orderBy: { createdAt: 'desc' },
    });

    res.json({ sessions });
  } catch (error) {
    console.error('getCounselorSessions error:', error);
    res.status(500).json({ error: 'Failed to fetch sessions' });
  }
};

/**
 * POST /api/chat/session/:sessionId/messages
 * Save a message to the database (used as REST fallback; primary is Socket.io)
 */
const saveMessage = async (req, res) => {
  try {
    const { sessionId } = req.params;
    const { content } = req.body;
    const senderId = req.user.id;

    if (!content || !content.trim()) {
      return res.status(400).json({ error: 'Content is required' });
    }

    // Verify session access
    const session = await prisma.chatSession.findFirst({
      where: {
        id: sessionId,
        OR: [{ studentId: senderId }, { counselorId: senderId }],
        status: 'ACTIVE',
      },
    });
    if (!session) {
      return res.status(404).json({ error: 'Session not found or access denied' });
    }

    const message = await prisma.chatMessage.create({
      data: { sessionId, senderId, content: content.trim() },
      include: {
        sender: { select: { id: true, fullName: true, role: true, avatarUrl: true } },
      },
    });

    // Broadcast via Socket.io
    const io = req.app.get('io');
    if (io) {
      io.to(`session_${sessionId}`).emit('receive_message', message);
    }

    res.status(201).json({ message });
  } catch (error) {
    console.error('saveMessage error:', error);
    res.status(500).json({ error: 'Failed to save message' });
  }
};

/**
 * GET /api/chat/student-sessions
 * Fetch all chat sessions for the logged-in student (STUDENT)
 */
const getStudentSessions = async (req, res) => {
  try {
    const sessions = await prisma.chatSession.findMany({
      where: { studentId: req.user.id },
      include: {
        counselor: { select: { id: true, fullName: true, avatarUrl: true } },
        messages: {
          orderBy: { createdAt: 'desc' },
          take: 1, // Latest message preview
          select: { content: true, createdAt: true, senderId: true },
        },
      },
      orderBy: { createdAt: 'desc' },
    });

    res.json({ sessions });
  } catch (error) {
    console.error('getStudentSessions error:', error);
    res.status(500).json({ error: 'Failed to fetch sessions' });
  }
};

module.exports = { getOrCreateSession, getSessionMessages, getCounselorSessions, getStudentSessions, saveMessage };
