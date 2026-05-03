import apiClient from './apiClient';

/**
 * Fetch all active counselors for selection
 */
export const fetchCounselors = async () => {
  const { data } = await apiClient.get('/appointments/counselors');
  return data.counselors;
};

/**
 * Fetch available time slots for a counselor on a specific date
 * @param {string} counselorId
 * @param {string} date - ISO date string (e.g. "2026-06-17")
 */
export const fetchAvailableSlots = async (counselorId, date) => {
  const { data } = await apiClient.get('/appointments/slots', {
    params: { counselorId, date },
  });
  return data.availableSlots;
};

/**
 * Book an appointment with a counselor
 * @param {{ counselorId: string, date: string, timeSlot: string, notes?: string }} body
 */
export const bookAppointment = async (body) => {
  const { data } = await apiClient.post('/appointments', body);
  return data.appointment;
};

/**
 * Fetch the logged-in student's own appointments
 */
export const fetchMyAppointments = async () => {
  const { data } = await apiClient.get('/appointments/my');
  return data.appointments;
};

/**
 * Submit a vent message (Listen-Only)
 * @param {string} content
 */
export const submitVent = async (content) => {
  const { data } = await apiClient.post('/appointments/venting', { content });
  return data.ventMessage;
};

/**
 * Fetch the logged-in student's own vent history
 */
export const fetchMyVents = async () => {
  const { data } = await apiClient.get('/appointments/venting/my');
  return data.vents;
};
