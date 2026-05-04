const express = require('express');
const router = express.Router();
const { authenticate } = require('../middleware/auth');
const { roleGuard } = require('../middleware/roleGuard');
const { validate } = require('../middleware/validate');
const { createAppointmentSchema, createVentSchema } = require('../validators/appointment.validators');
const {
  getCounselors,
  getAvailableSlots,
  createAppointment,
  getMyAppointments,
} = require('../controllers/appointment.controller');
const { submitVent, getMyVents } = require('../controllers/vent.controller');

// Public-ish: any authenticated user can see counselors
router.get('/counselors', authenticate, getCounselors);

// Student-only routes
router.get('/slots', authenticate, roleGuard('STUDENT'), getAvailableSlots);
router.post('/', authenticate, roleGuard('STUDENT'), validate(createAppointmentSchema), createAppointment);
router.get('/my', authenticate, roleGuard('STUDENT'), getMyAppointments);

// Venting routes (student only)
router.post('/venting', authenticate, roleGuard('STUDENT'), validate(createVentSchema), submitVent);
router.get('/venting/my', authenticate, roleGuard('STUDENT'), getMyVents);

module.exports = router;
