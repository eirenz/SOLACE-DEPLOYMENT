const prisma = require('../config/db');

// Defined available time slots for the system
const ALL_SLOTS = [
  '09:00 AM — 10:00 AM',
  '10:00 AM — 11:00 AM',
  '11:30 AM — 12:30 PM',
  '01:00 PM — 02:00 PM',
  '02:00 PM — 03:00 PM',
  '04:30 PM — 05:30 PM',
];

/**
 * GET /api/appointments/counselors
 * Fetch all active counselors with their profile info (STUDENT)
 */
const getCounselors = async (req, res) => {
  try {
    const counselors = await prisma.user.findMany({
      where: { role: 'COUNSELOR', status: 'ACTIVE' },
      select: {
        id: true,
        fullName: true,
        email: true,
        avatarUrl: true,
        counselorProfile: {
          select: {
            specialization: true,
            officeLocation: true,
            experience: true,
          },
        },
      },
    });

    res.json({ counselors });
  } catch (error) {
    console.error('getCounselors error:', error);
    res.status(500).json({ error: 'Failed to fetch counselors' });
  }
};

/**
 * GET /api/appointments/slots?counselorId=&date=
 * Return available slots for a counselor on a given date (STUDENT)
 */
const getAvailableSlots = async (req, res) => {
  try {
    const { counselorId, date } = req.query;
    if (!counselorId || !date) {
      return res.status(400).json({ error: 'counselorId and date are required' });
    }

    const startOfDay = new Date(date);
    startOfDay.setHours(0, 0, 0, 0);
    const endOfDay = new Date(date);
    endOfDay.setHours(23, 59, 59, 999);

    // Get already-booked slots for this counselor on this day
    const booked = await prisma.appointment.findMany({
      where: {
        counselorId,
        date: { gte: startOfDay, lte: endOfDay },
        status: { in: ['PENDING', 'CONFIRMED'] },
      },
      select: { timeSlot: true },
    });

    const bookedSlots = booked.map((a) => a.timeSlot);
    const availableSlots = ALL_SLOTS.filter((s) => !bookedSlots.includes(s));

    res.json({ availableSlots });
  } catch (error) {
    console.error('getAvailableSlots error:', error);
    res.status(500).json({ error: 'Failed to fetch available slots' });
  }
};

/**
 * POST /api/appointments
 * Book an appointment (STUDENT)
 * Body: { counselorId, date, timeSlot, notes }
 */
const createAppointment = async (req, res) => {
  try {
    const { counselorId, date, timeSlot, notes } = req.body;
    const studentId = req.user.id;

    if (!counselorId || !date || !timeSlot) {
      return res.status(400).json({ error: 'counselorId, date, and timeSlot are required' });
    }

    // Verify counselor exists
    const counselor = await prisma.user.findFirst({
      where: { id: counselorId, role: 'COUNSELOR', status: 'ACTIVE' },
    });
    if (!counselor) {
      return res.status(404).json({ error: 'Counselor not found' });
    }

    // Check for slot conflict
    const dateObj = new Date(date);
    const startOfDay = new Date(dateObj);
    startOfDay.setHours(0, 0, 0, 0);
    const endOfDay = new Date(dateObj);
    endOfDay.setHours(23, 59, 59, 999);

    const conflict = await prisma.appointment.findFirst({
      where: {
        counselorId,
        timeSlot,
        date: { gte: startOfDay, lte: endOfDay },
        status: { in: ['PENDING', 'CONFIRMED'] },
      },
    });
    if (conflict) {
      return res.status(409).json({ error: 'This time slot is already booked' });
    }

    // Use student's alias or generate one
    const student = await prisma.user.findUnique({ where: { id: studentId } });
    const alias = student.alias || student.fullName;

    const appointment = await prisma.appointment.create({
      data: {
        studentId,
        counselorId,
        alias,
        date: new Date(date),
        timeSlot,
        mode: 'ADVICE_RECOVERY',
        notes: notes || null,
      },
      include: {
        counselor: {
          select: { fullName: true, email: true, avatarUrl: true },
        },
      },
    });

    res.status(201).json({ appointment });
  } catch (error) {
    console.error('createAppointment error:', error);
    res.status(500).json({ error: 'Failed to create appointment' });
  }
};

/**
 * GET /api/appointments/my
 * Fetch logged-in student's own appointments (STUDENT)
 */
const getMyAppointments = async (req, res) => {
  try {
    const appointments = await prisma.appointment.findMany({
      where: { studentId: req.user.id },
      include: {
        counselor: {
          select: { fullName: true, avatarUrl: true },
        },
      },
      orderBy: { date: 'desc' },
    });

    res.json({ appointments });
  } catch (error) {
    console.error('getMyAppointments error:', error);
    res.status(500).json({ error: 'Failed to fetch appointments' });
  }
};

module.exports = { getCounselors, getAvailableSlots, createAppointment, getMyAppointments };
