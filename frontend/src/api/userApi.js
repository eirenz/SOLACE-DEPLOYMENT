import apiClient from './apiClient';

/**
 * Fetch the current user's profile (includes counselorProfile for counselors)
 */
export const fetchUserProfile = async () => {
  const { data } = await apiClient.get('/users/profile');
  return data;
};

/**
 * Update the current user's profile
 * @param {Object} profileData - fields to update (firstName, lastName, email, etc.)
 *   For counselors, also accepts: employeeId, workPhone, license, specialization, officeLocation, experience
 */
export const updateUserProfile = async (profileData) => {
  const { data } = await apiClient.put('/users/profile', profileData);
  return data;
};

/**
 * Update the current user's password
 * @param {{ currentPassword: string, newPassword: string }} passwords
 */
export const updateUserPassword = async ({ currentPassword, newPassword }) => {
  const { data } = await apiClient.put('/users/profile/password', { currentPassword, newPassword });
  return data;
};
