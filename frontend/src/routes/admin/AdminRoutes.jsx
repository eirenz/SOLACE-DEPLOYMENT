import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import AdminPageWrapper from '../../components/layout/AdminPageWrapper';
import LayoutWrapper from '../../components/layout/LayoutWrapper';

// Admin Features
import AdminDashboard from '../../features/admin/dashboard/AdminDashboard';
import UserManagement from '../../features/admin/user-management/UserManagement';
import FlagContent from '../../features/admin/flag-content/FlagContent';
import CounselorList from '../../features/admin/counselors-list/CounselorList';
import AdminAppointments from '../../features/admin/appointment/AdminAppointments';
import AnalysisReports from '../../features/admin/analysis-reports/AnalysisReports';

const AdminRoutes = () => {
  return (
    <Routes>
      <Route element={<LayoutWrapper DesktopLayout={AdminPageWrapper} role="admin" />}>
        <Route index element={<Navigate to="dashboard" replace />} />
        <Route path="dashboard" element={<AdminDashboard />} />
        <Route path="user-management" element={<UserManagement />} />
        <Route path="flag-content" element={<FlagContent />} />
        <Route path="counselors-list" element={<CounselorList />} />
        <Route path="appointment" element={<AdminAppointments />} />
        <Route path="analysis-reports" element={<AnalysisReports />} />
      </Route>
      <Route path="*" element={<Navigate to="dashboard" replace />} />
    </Routes>
  );
};

export default AdminRoutes;
