const express = require('express');
const router = express.Router();
const { authenticate } = require('../middleware/auth');
const { roleGuard } = require('../middleware/roleGuard');
const {
  getMyAppointments,
  updateAppointmentStatus,
  getListenOnlyMessages,
  reactToVent,
  toggleAvailability,
  getAvailability,
} = require('../controllers/counselor.controller');

// All counselor routes require authentication and COUNSELOR role
router.use(authenticate, roleGuard('COUNSELOR'));

// Appointments
router.get('/appointments', getMyAppointments);
router.put('/appointments/:id/status', updateAppointmentStatus);

// Listen-Only / Venting
router.get('/listen-only', getListenOnlyMessages);
router.post('/listen-only/:id/react', reactToVent);

// Availability toggle
router.get('/availability', getAvailability);
router.put('/availability', toggleAvailability);

module.exports = router;
