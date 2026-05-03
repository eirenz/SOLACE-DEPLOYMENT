import apiClient from './apiClient';

/**
 * Fetch all notifications for the current user
 * Returns { notifications, unreadCount }
 */
export const fetchNotifications = async () => {
  const res = await apiClient.get('/notifications');
  return res.data;
};

/**
 * Mark a specific notification as read
 * @param {string} id - Notification ID
 */
export const markNotificationRead = async (id) => {
  const res = await apiClient.patch(`/notifications/${id}/read`);
  return res.data;
};

/**
 * Mark all notifications as read
 */
export const markAllNotificationsRead = async () => {
  const res = await apiClient.patch('/notifications/mark-all-read');
  return res.data;
};
