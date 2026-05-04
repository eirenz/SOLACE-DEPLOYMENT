const { z } = require('zod');

const VALID_TIME_SLOTS = [
  '09:00 AM — 10:00 AM',
  '10:00 AM — 11:00 AM',
  '11:30 AM — 12:30 PM',
  '01:00 PM — 02:00 PM',
  '02:00 PM — 03:00 PM',
  '04:30 PM — 05:30 PM',
];

const createAppointmentSchema = z.object({
  counselorId: z.string().uuid('Invalid counselor ID format'),
  date: z.string().min(1, 'Date is required').refine(
    (val) => !isNaN(new Date(val).getTime()),
    { message: 'Invalid date format' }
  ),
  timeSlot: z.enum(VALID_TIME_SLOTS, {
    errorMap: () => ({ message: 'Invalid time slot. Please select a valid appointment time.' }),
  }),
  mode: z.enum(['LISTEN_ONLY', 'ADVICE_RECOVERY']).optional(),
  notes: z.string().max(2000, 'Notes must be 2,000 characters or less').optional().nullable(),
});

const createVentSchema = z.object({
  content: z.string().min(1, 'Vent content is required').max(10000, 'Content must be 10,000 characters or less'),
});

module.exports = {
  createAppointmentSchema,
  createVentSchema,
};
