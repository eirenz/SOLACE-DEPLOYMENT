import { io } from 'socket.io-client';

const SOCKET_URL = import.meta.env.VITE_API_BASE_URL?.replace('/api', '') || 'http://localhost:5000';

let socket = null;

/**
 * Connect to the Socket.io server
 * @param {string} token - JWT access token for authentication
 * @returns {Socket} the socket instance
 */
export const connectSocket = (token) => {
  if (!socket) {
    socket = io(SOCKET_URL, {
      withCredentials: true,
      transports: ['websocket', 'polling'],
      auth: {
        token: token, // Send JWT for server-side verification
      },
    });

    socket.on('connect', () => {
      console.log('🔌 Socket connected:', socket.id);
    });
    socket.on('disconnect', () => {
      console.log('🔌 Socket disconnected');
    });
    socket.on('connect_error', (err) => {
      console.error('Socket connection error:', err.message);
    });
  }
  return socket;
};

/**
 * Disconnect and destroy the socket connection
 */
export const disconnectSocket = () => {
  if (socket) {
    socket.disconnect();
    socket = null;
  }
};

/**
 * Join a personal user notification room (reactions, appointment updates)
 * @param {string} userId
 */
export const joinUserRoom = (userId) => {
  if (socket) socket.emit('join_user_room', userId);
};

/**
 * Join a personal counselor notification room
 * @param {string} counselorId
 */
export const joinCounselorRoom = (counselorId) => {
  if (socket) socket.emit('join_counselor_room', counselorId);
};

/**
 * Join a chat session room (for real-time messaging)
 * @param {string} sessionId
 */
export const joinSession = (sessionId) => {
  if (socket) socket.emit('join_session', sessionId);
};

/**
 * Send a real-time chat message (persisted to DB by the server)
 * Note: senderId is now derived server-side from the authenticated socket.
 * The senderId parameter is kept for backward compatibility but ignored by the server.
 * @param {string} sessionId
 * @param {string} senderId - (legacy, ignored by server — server uses socket.userId)
 * @param {string} content
 */
export const sendMessage = (sessionId, senderId, content) => {
  if (socket) socket.emit('send_message', { sessionId, senderId, content });
};

/**
 * Listen for incoming chat messages
 * @param {Function} callback - called with the message object
 */
export const onReceiveMessage = (callback) => {
  if (socket) socket.on('receive_message', callback);
};

/**
 * Remove handler for incoming messages
 */
export const offReceiveMessage = () => {
  if (socket) socket.off('receive_message');
};

/**
 * Listen for vent reactions (student-side)
 * @param {Function} callback
 */
export const onVentReaction = (callback) => {
  if (socket) socket.on('vent_reaction', callback);
};

/**
 * Listen for appointment status updates (student-side)
 * @param {Function} callback
 */
export const onAppointmentUpdated = (callback) => {
  if (socket) socket.on('appointment_updated', callback);
};

/**
 * Listen for new vent messages (counselor-side)
 * @param {Function} callback
 */
export const onNewVent = (callback) => {
  if (socket) socket.on('new_vent', callback);
};

/**
 * Listen for new chat sessions (counselor-side)
 * @param {Function} callback
 */
export const onNewChatSession = (callback) => {
  if (socket) socket.on('new_chat_session', callback);
};

/**
 * Get current socket instance
 */
export const getSocket = () => socket;
