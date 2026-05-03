import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import useAuthStore from '../store/useAuthStore';

// Auth Pages
import Login from '../features/auth/Login';
import AdminLogin from '../features/auth/AdminLogin';
import SignUp from '../features/auth/SignUp';
import ForgotPassword from '../features/auth/ForgotPassword';
import VerificationCode from '../features/auth/VerificationCode';
import CreatePassword from '../features/auth/CreatePassword';

// Role-Based Routes
import UserRoutes from './user/UserRoutes';
import CounselorRoutes from './counselor/CounselorRoutes';
import AdminRoutes from './admin/AdminRoutes';

// Other
import Onboarding from '../features/onboarding/Onboarding';

const AppRoutes = () => {
  const { isAuthenticated, role } = useAuthStore();

  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/verify-code" element={<VerificationCode />} />
        <Route path="/create-password" element={<CreatePassword />} />
        
        {/* Protected Logic */}
        {isAuthenticated ? (
          <>
            <Route path="/onboarding" element={<Onboarding />} />
            
            {/* Role-Based Redirection */}
            <Route 
              path="/user/*" 
              element={role === 'user' ? <UserRoutes /> : <Navigate to={`/${role}`} replace />} 
            />
            <Route 
              path="/counselor/*" 
              element={role === 'counselor' ? <CounselorRoutes /> : <Navigate to={`/${role}`} replace />} 
            />
            <Route 
              path="/admin/*" 
              element={role === 'admin' ? <AdminRoutes /> : <Navigate to={`/${role}`} replace />} 
            />

            {/* Default Protected Entry Point */}
            <Route path="/" element={<Navigate to={`/${role}`} replace />} />
          </>
        ) : (
          <Route path="*" element={<Navigate to="/login" replace />} />
        )}
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
