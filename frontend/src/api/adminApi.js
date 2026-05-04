import apiClient from './apiClient';

/**
 * Fetch all appointments (admin view) with optional filters
 * @param {{ status?: string, counselorId?: string, page?: number, limit?: number }} params
 */
export const fetchAllAppointments = async (params = {}) => {
  const { data } = await apiClient.get('/admin/appointments', { params });
  return data; // { appointments, total, page, limit }
};

/**
 * Fetch appointment stats: today, upcoming, completed, cancelled, total
 */
export const fetchAppointmentStats = async () => {
  const { data } = await apiClient.get('/admin/appointments/stats');
  return data.stats; // { today, upcoming, completed, cancelled, total }
};

/**
 * Fetch mood monitoring data: summary counts, user lists, high priority alert, trend
 */
export const fetchMoodMonitoring = async () => {
  const { data } = await apiClient.get('/admin/mood-monitoring');
  return data; // { summary, highPriorityAlert, users, trend }
};

/**
 * Fetch a specific student's mood history for a given month/year
 * @param {string} userId
 * @param {number} year
 * @param {number} month
 */
export const fetchUserMoodHistory = async (userId, year, month) => {
  const { data } = await apiClient.get(`/admin/mood-monitoring/${userId}/history`, {
    params: { year, month },
  });
  return data; // { year, month, moodByDay }
};

/**
 * Send a support message (notification) to a user
 * @param {string} userId
 * @param {string} title
 * @param {string} message
 */
export const sendSupportMessage = async (userId, title, message) => {
  const { data } = await apiClient.post(`/admin/mood-monitoring/${userId}/message`, { title, message });
  return data;
};

/**
 * Fetch all reported/flagged community posts
 */
export const fetchReportedPosts = async () => {
  const { data } = await apiClient.get('/admin/reports');
  return data; // { reports }
};

/**
 * Fetch all users with optional role/status filters
 * @param {{ role?: string, status?: string }} params
 */
export const fetchAllUsers = async (params = {}) => {
  const { data } = await apiClient.get('/admin/users', { params });
  return data; // { users }
};

/**
 * Toggle user status between ACTIVE and SUSPENDED
 */
export const updateUserStatus = async (userId, status) => {
  const { data } = await apiClient.patch(`/admin/users/${userId}/status`, { status });
  return data;
};

/**
 * Update report status to REVIEWED or DISMISSED
 */
export const updateReportStatus = async (reportId, status) => {
  const { data } = await apiClient.patch(`/admin/reports/${reportId}/status`, { status });
  return data;
};

/**
 * Resolve a report by deleting the post and warning the author
 */
export const resolveReportedPost = async (reportId) => {
  const { data } = await apiClient.post(`/admin/reports/${reportId}/resolve`);
  return data;
};

/**
 * Delete a user and their profile permanently
 */
export const deleteUser = async (userId) => {
  const { data } = await apiClient.delete(`/admin/users/${userId}`);
  return data;
};

/**
 * Fetch dashboard statistics and aggregates
 */
export const fetchDashboardStats = async () => {
  const { data } = await apiClient.get('/admin/dashboard-stats');
  return data;
};

/**
 * Create a new counselor account with optional profile fields
 * @param {{ fullName: string, email: string, password: string, employeeId?: string, workPhone?: string, license?: string, specialization?: string, officeLocation?: string, experience?: string }} payload
 */
export const createCounselorAccount = async (payload) => {
  const { data } = await apiClient.post('/admin/counselors', payload);
  return data;
};

/**
 * Promote/change a user's role (e.g. STUDENT → COUNSELOR)
 * @param {string} userId
 * @param {string} role - Currently only 'COUNSELOR' is supported
 */
export const promoteUserRole = async (userId, role) => {
  const { data } = await apiClient.patch(`/admin/users/${userId}/role`, { role });
  return data;
};
