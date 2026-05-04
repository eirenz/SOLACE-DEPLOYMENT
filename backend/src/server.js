const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const { PORT, FRONTEND_URL } = require('./config/env');
const errorHandler = require('./middleware/errorHandler');
const prisma = require('./config/db');
const { verifyAccessToken } = require('./utils/tokens');

// Route imports
const authRoutes = require('./routes/auth.routes');
const userRoutes = require('./routes/user.routes');
const journalRoutes = require('./routes/journal.routes');
const checkinRoutes = require('./routes/checkin.routes');
const communityRoutes = require('./routes/community.routes');
const appointmentRoutes = require('./routes/appointment.routes');
const counselorRoutes = require('./routes/counselor.routes');
const adminRoutes = require('./routes/admin.routes');
const chatRoutes = require('./routes/chat.routes');
const notificationRoutes = require('./routes/notification.routes');

const app = express();

// Trust the Render proxy for rate limiting to work correctly
app.set('trust proxy', 1);

// --- Global Middleware ---
app.use(helmet());
app.use(cors({
  origin: FRONTEND_URL,
  credentials: true,
}));
app.use(morgan('dev'));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// --- Health Check ---
app.get('/api/health', async (req, res) => {
  try {
    await prisma.$queryRaw`SELECT 1`; // Keep Neon DB awake
    res.json({ status: 'ok', timestamp: new Date().toISOString() });
  } catch (err) {
    res.status(500).json({ status: 'degraded', error: 'Database unreachable', timestamp: new Date().toISOString() });
  }
});

// --- API Routes ---
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/journals', journalRoutes);
app.use('/api/checkins', checkinRoutes);
app.use('/api/community', communityRoutes);
app.use('/api/appointments', appointmentRoutes);
app.use('/api/counselor', counselorRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/chat', chatRoutes);
app.use('/api/notifications', notificationRoutes);

// --- 404 Handler ---
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// --- Global Error Handler ---
app.use(errorHandler);

// --- Start Server ---
const server = http.createServer(app);

// Initialize Socket.io
const io = new Server(server, {
  cors: {
    origin: FRONTEND_URL,
    methods: ['GET', 'POST'],
    credentials: true,
  }
});

// --- Socket.io Authentication Middleware (C3 fix) ---
// Verifies JWT before allowing any WebSocket connection
io.use(async (socket, next) => {
  try {
    const token = socket.handshake.auth?.token;
    if (!token) {
      return next(new Error('Authentication required'));
    }

    const decoded = verifyAccessToken(token);
    
    // Verify user still exists and is active
    const user = await prisma.user.findUnique({
      where: { id: decoded.userId },
      select: { id: true, role: true, status: true, fullName: true },
    });

    if (!user || user.status === 'SUSPENDED') {
      return next(new Error('Authentication failed'));
    }

    // Attach verified user info to the socket instance
    socket.userId = user.id;
    socket.userRole = user.role;
    socket.userFullName = user.fullName;
    next();
  } catch (err) {
    console.error('Socket auth error:', err.message);
    next(new Error('Invalid or expired token'));
  }
});

io.on('connection', (socket) => {
  console.log(`🔌 Client connected: ${socket.id} (user: ${socket.userId}, role: ${socket.userRole})`);

  // Student/Counselor joins a specific chat session room
  // Validates that the user is actually a participant of the session
  socket.on('join_session', async (sessionId) => {
    try {
      const session = await prisma.chatSession.findUnique({
        where: { id: sessionId },
        select: { studentId: true, counselorId: true },
      });

      if (!session) {
        return socket.emit('error', { message: 'Session not found' });
      }

      // Only allow participants of this session to join
      if (session.studentId !== socket.userId && session.counselorId !== socket.userId) {
        return socket.emit('error', { message: 'Not authorized for this session' });
      }

      socket.join(`session_${sessionId}`);
      console.log(`Socket ${socket.id} joined session_${sessionId}`);
    } catch (err) {
      console.error('join_session error:', err.message);
      socket.emit('error', { message: 'Failed to join session' });
    }
  });

  // Counselor joins their personal notification room
  // Validates the counselor can only join their own room
  socket.on('join_counselor_room', (counselorId) => {
    if (counselorId !== socket.userId) {
      return socket.emit('error', { message: 'Cannot join another user\'s room' });
    }
    socket.join(`counselor_${counselorId}`);
    console.log(`Counselor ${counselorId} joined their room`);
  });

  // Student joins their personal notification room
  // Validates the student can only join their own room
  socket.on('join_user_room', (userId) => {
    if (userId !== socket.userId) {
      return socket.emit('error', { message: 'Cannot join another user\'s room' });
    }
    socket.join(`user_${userId}`);
    console.log(`User ${userId} joined their room`);
  });

  // Real-time chat messaging — persists to DB, then broadcasts
  // C4 fix: Uses socket.userId (from verified JWT) instead of client-provided senderId
  socket.on('send_message', async ({ sessionId, content }) => {
    try {
      // Use the authenticated user's ID, not client-provided senderId
      const senderId = socket.userId;

      const message = await prisma.chatMessage.create({
        data: { sessionId, senderId, content },
        include: {
          sender: { select: { id: true, fullName: true, role: true, avatarUrl: true } },
          session: { select: { studentId: true, counselorId: true } }
        },
      });
      io.to(`session_${sessionId}`).emit('receive_message', message);

      // Create notification for the recipient
      // Ensure we explicitly convert to string for safe comparison
      const safeSenderId = String(message.senderId);
      const safeStudentId = String(message.session.studentId);
      const safeCounselorId = String(message.session.counselorId);

      const recipientId = safeSenderId === safeStudentId 
        ? safeCounselorId 
        : safeStudentId;
      
      // Safeguard: do not notify yourself under ANY circumstances
      if (recipientId !== safeSenderId) {
        let shouldNotify = true;
        
        // If the recipient is a student, only notify if the sender is COUNSELOR or ADMIN
        if (recipientId === safeStudentId) {
          if (message.sender.role === 'STUDENT') {
            shouldNotify = false;
          }
        }

        if (shouldNotify) {
          const notification = await prisma.notification.create({
            data: {
              userId: recipientId,
              type: 'CHAT',
              title: 'New Message',
              message: `${message.sender.fullName}: ${content.substring(0, 30)}${content.length > 30 ? '...' : ''}`,
              link: message.sender.role === 'STUDENT' 
                ? `/counselor/chat?sessionId=${sessionId}` 
                : `/user/appointments?action=startChat&counselorId=${safeCounselorId}`
            }
          });

          io.to(`user_${recipientId}`).to(`counselor_${recipientId}`).emit('new_notification', notification);
        }
      }
    } catch (error) {
      console.error('Socket send_message error:', error);
      socket.emit('message_error', { error: 'Failed to send message' });
    }
  });

  socket.on('disconnect', () => {
    console.log(`🔌 Client disconnected: ${socket.id}`);
  });
});

// Expose io object globally
app.set('io', io);

server.listen(PORT, () => {
  console.log(`🚀 SOLACE API Server & WebSocket running on http://localhost:${PORT}`);
  console.log(`📋 Health check: http://localhost:${PORT}/api/health`);
});

module.exports = { app, server, io };
