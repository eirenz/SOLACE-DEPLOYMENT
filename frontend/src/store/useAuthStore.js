import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useAuthStore = create()(
  persist(
    (set) => ({
      user: null,
      role: null, // 'user', 'counselor', 'admin'
      isAuthenticated: false,
      token: null,

      login: (userData, role, token) => set({ 
        user: userData, 
        role: role, 
        token: token, 
        isAuthenticated: true 
      }),

      updateUser: (updates) => set((state) => ({
        user: state.user ? { ...state.user, ...updates } : null
      })),

      setToken: (token) => set({ token }),

      logout: () => set({ 
        user: null, 
        role: null, 
        token: null, 
        isAuthenticated: false 
      }),

      setRole: (role) => set({ role }), // For testing/onboarding
    }),
    {
      name: 'solace-auth-storage',
    }
  )
);

export default useAuthStore;
