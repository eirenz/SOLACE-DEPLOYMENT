import apiClient from './apiClient';

/**
 * Get or create an active chat session with a counselor (STUDENT)
 * @param {string} counselorId
 * Returns: { session }
 */
export const getOrCreateSession = async (counselorId) => {
  const { data } = await apiClient.post('/chat/session', { counselorId });
  return data.session;
};

/**
 * Fetch paginated message history for a session (STUDENT or COUNSELOR)
 * @param {string} sessionId
 * @param {number} [page=1]
 * @param {number} [limit=50]
 */
export const fetchSessionMessages = async (sessionId, page = 1, limit = 50) => {
  const { data } = await apiClient.get(`/chat/session/${sessionId}/messages`, {
    params: { page, limit },
  });
  return data; // { messages, total, page, limit }
};

/**
 * Fetch all active chat sessions for the logged-in counselor (COUNSELOR)
 */
export const fetchCounselorSessions = async () => {
  const { data } = await apiClient.get('/chat/sessions');
  return data.sessions;
};

/**
 * Fetch all chat sessions for the logged-in student (STUDENT)
 * Returns: { sessions } — each with counselor info and latest message preview
 */
export const fetchStudentSessions = async () => {
  const { data } = await apiClient.get('/chat/student-sessions');
  return data.sessions;
};
