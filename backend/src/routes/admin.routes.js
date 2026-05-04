const express = require('express');
const router = express.Router();
const { authenticate } = require('../middleware/auth');
const { roleGuard } = require('../middleware/roleGuard');
const { 
  getAllAppointments, 
  getAppointmentStats, 
  getUserMoodMonitoring, 
  getUserMoodHistory, 
  sendSupportMessage, 
  getAllUsers, 
  getReportedPosts,
  updateUserStatus,
  updateReportStatus,
  resolveReportedPost,
  deleteUser,
  getDashboardStats,
  createCounselor,
  promoteToCouncelor 
} = require('../controllers/admin.controller');

// All admin routes require authentication and ADMIN role
router.use(authenticate, roleGuard('ADMIN'));

// Dashboard
router.get('/dashboard-stats', getDashboardStats);

// General user management
router.get('/users', getAllUsers);
router.patch('/users/:userId/status', updateUserStatus);
router.patch('/users/:userId/role', promoteToCouncelor);
router.delete('/users/:userId', deleteUser);

// Counselor management
router.post('/counselors', createCounselor);

// Report management
router.get('/reports', getReportedPosts);
router.patch('/reports/:reportId/status', updateReportStatus);
router.post('/reports/:reportId/resolve', resolveReportedPost);

// Appointment management
router.get('/appointments', getAllAppointments);
router.get('/appointments/stats', getAppointmentStats);

// Mood monitoring
router.get('/mood-monitoring', getUserMoodMonitoring);
router.get('/mood-monitoring/:userId/history', getUserMoodHistory);
router.post('/mood-monitoring/:userId/message', sendSupportMessage);

module.exports = router;
