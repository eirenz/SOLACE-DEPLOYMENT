import { create } from 'zustand';
import { fetchNotifications, markNotificationRead, markAllNotificationsRead } from '../api/notificationApi';
import { connectSocket, joinUserRoom, joinCounselorRoom } from '../api/chatSocket';

const useNotificationStore = create((set, get) => ({
  notifications: [],
  unreadCount: 0,
  isLoading: false,
  isDropdownOpen: false,

  /** Fetch notifications from backend */
  loadNotifications: async () => {
    set({ isLoading: true });
    try {
      const data = await fetchNotifications();
      set({ notifications: data.notifications, unreadCount: data.unreadCount });
    } catch (err) {
      console.error('Failed to load notifications:', err);
    } finally {
      set({ isLoading: false });
    }
  },

  /** Called once on login to set up socket listener */
  initSocket: (user, token) => {
    if (!user?.id) return;
    const socket = connectSocket(token);

    // Join proper rooms based on role
    if (user.role === 'COUNSELOR' || user.role === 'counselor') {
      joinCounselorRoom(user.id);
    }
    if (user.role === 'ADMIN' || user.role === 'admin') {
      joinUserRoom(user.id);
      joinCounselorRoom(user.id);
    }
    if (user.role === 'STUDENT' || user.role === 'student') {
      joinUserRoom(user.id);
    }

    // Listen for real-time notifications
    socket.off('new_notification'); // prevent duplicate listeners
    socket.on('new_notification', (notification) => {
      if (notification.userId === user.id) {
        set((state) => ({
          notifications: [notification, ...state.notifications].slice(0, 50),
          unreadCount: state.unreadCount + 1,
        }));
      }
    });
  },

  /** Mark a single notification as read */
  markAsRead: async (id) => {
    try {
      await markNotificationRead(id);
      set((state) => ({
        notifications: state.notifications.map((n) =>
          n.id === id ? { ...n, isRead: true } : n
        ),
        unreadCount: Math.max(0, state.unreadCount - 1),
      }));
    } catch (err) {
      console.error('Failed to mark notification as read:', err);
    }
  },

  /** Mark all notifications as read */
  markAllAsRead: async () => {
    try {
      await markAllNotificationsRead();
      set((state) => ({
        notifications: state.notifications.map((n) => ({ ...n, isRead: true })),
        unreadCount: 0,
      }));
    } catch (err) {
      console.error('Failed to mark all as read:', err);
    }
  },

  toggleDropdown: () => set((state) => ({ isDropdownOpen: !state.isDropdownOpen })),
  closeDropdown: () => set({ isDropdownOpen: false }),
}));

export default useNotificationStore;
