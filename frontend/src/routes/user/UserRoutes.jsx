import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// Core Features
import HomeDashboard from '../../features/user/dashboard/HomeDashboard';
import CheckIn from '../../features/user/checkin/CheckIn';
import Journal from '../../features/user/journal/Journal';
import Community from '../../features/user/safe-space/Community';
import Appointments from '../../features/user/support/Appointments';
import MoodTracker from '../../features/user/mood-tracker/MoodTracker';
import Profile from '../../features/user/profile/Profile';

// Layout
import PageWrapper from '../../components/layout/PageWrapper';
import LayoutWrapper from '../../components/layout/LayoutWrapper';

const UserRoutes = () => {
  return (
    <Routes>
      {/* Full-screen Protected Routes (No Nav) */}
      <Route path="checkin" element={<CheckIn />} />

      {/* Protected Routes (wrapped with Navbar and BottomNav) */}
      <Route element={<LayoutWrapper DesktopLayout={PageWrapper} role="user" />}>
        <Route index element={<Navigate to="dashboard" replace />} />
        <Route path="dashboard" element={<HomeDashboard />} />
        <Route path="journal" element={<Journal />} />
        <Route path="community" element={<Community />} />
        <Route path="appointments" element={<Appointments />} />
        <Route path="mood-tracker" element={<MoodTracker />} />
        <Route path="profile" element={<Profile />} />
      </Route>

      {/* Fallback within /user */}
      <Route path="*" element={<Navigate to="dashboard" replace />} />
    </Routes>
  );
};

export default UserRoutes;
