import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import CounselorPageWrapper from '../../components/layout/CounselorPageWrapper';
import LayoutWrapper from '../../components/layout/LayoutWrapper';
import CounselorDashboard from '../../features/counselor/dashboard/CounselorDashboard';
import CounselorAppointments from '../../features/counselor/appointments/CounselorAppointments';
import CounselorChat from '../../features/counselor/chat/CounselorChat';
import CounselorListenOnly from '../../features/counselor/support/CounselorListenOnly';
import CounselorProfile from '../../features/counselor/profile/CounselorProfile';

const CounselorRoutes = () => {
  return (
    <Routes>
      <Route element={<LayoutWrapper DesktopLayout={CounselorPageWrapper} role="counselor" />}>
        <Route index element={<Navigate to="dashboard" replace />} />
        <Route path="dashboard" element={<CounselorDashboard />} />
        <Route path="appointments" element={<CounselorAppointments />} />
        <Route path="chat" element={<CounselorChat />} />
        <Route path="listen-only" element={<CounselorListenOnly />} />
        <Route path="profile" element={<CounselorProfile />} />
      </Route>
      <Route path="*" element={<Navigate to="dashboard" replace />} />
    </Routes>
  );
};

export default CounselorRoutes;
