import apiClient from './apiClient';

/**
 * Fetch all appointments for the logged-in counselor, with optional status filter
 * @param {string} [status] - 'PENDING' | 'CONFIRMED' | 'COMPLETED' | 'CANCELLED'
 * Returns: { appointments, stats }
 */
export const fetchCounselorAppointments = async (status) => {
  const params = status ? { status } : {};
  const { data } = await apiClient.get('/counselor/appointments', { params });
  return data; // { appointments, stats }
};

/**
 * Update the status of a counselor's appointment
 * @param {string} id - Appointment ID
 * @param {string} status - 'CONFIRMED' | 'COMPLETED' | 'CANCELLED'
 */
export const updateAppointmentStatus = async (id, status, message = '') => {
  const payload = { status };
  if (message) payload.message = message;
  const { data } = await apiClient.put(`/counselor/appointments/${id}/status`, payload);
  return data.appointment;
};

/**
 * Fetch all Listen-Only (vent) messages assigned to the logged-in counselor
 * @param {string} [status] - 'UNREAD' | 'READ' | 'REACTED'
 */
export const fetchListenOnlyMessages = async (status) => {
  const params = status ? { status } : {};
  const { data } = await apiClient.get('/counselor/listen-only', { params });
  return data.vents;
};

/**
 * Send a supportive reaction to a vent message
 * @param {string} ventId
 * @param {string} reaction - e.g. "❤️ We're here for you"
 */
export const reactToVent = async (ventId, reaction) => {
  const { data } = await apiClient.post(`/counselor/listen-only/${ventId}/react`, { reaction });
  return data.ventMessage;
};

/**
 * Get the current counselor's availability status
 * Returns: { isAvailable: boolean }
 */
export const getAvailability = async () => {
  const { data } = await apiClient.get('/counselor/availability');
  return data;
};

/**
 * Toggle the counselor's availability for vent/chat assignments
 * @param {boolean} isAvailable
 * Returns: { isAvailable: boolean }
 */
export const toggleAvailability = async (isAvailable) => {
  const { data } = await apiClient.put('/counselor/availability', { isAvailable });
  return data;
};
