const prisma = require('../config/db');
const { createNotification } = require('./notification.controller');

/**
 * GET /api/counselor/appointments
 * Fetch all appointments assigned to the logged-in counselor (COUNSELOR)
 */
const getMyAppointments = async (req, res) => {
  try {
    const { status } = req.query;
    const where = { counselorId: req.user.id };
    if (status) where.status = status.toUpperCase();

    const appointments = await prisma.appointment.findMany({
      where,
      include: {
        student: {
          select: { id: true, fullName: true, email: true, avatarUrl: true, alias: true },
        },
      },
      orderBy: { date: 'desc' },
    });

    // Build stats
    const all = await prisma.appointment.findMany({ where: { counselorId: req.user.id } });
    const stats = {
      total: all.length,
      pending: all.filter((a) => a.status === 'PENDING').length,
      confirmed: all.filter((a) => a.status === 'CONFIRMED').length,
      completed: all.filter((a) => a.status === 'COMPLETED').length,
      cancelled: all.filter((a) => a.status === 'CANCELLED').length,
    };

    res.json({ appointments, stats });
  } catch (error) {
    console.error('getCounselorAppointments error:', error);
    res.status(500).json({ error: 'Failed to fetch appointments' });
  }
};

/**
 * PUT /api/counselor/appointments/:id/status
 * Update appointment status to CONFIRMED, COMPLETED, or CANCELLED (COUNSELOR)
 * Body: { status }
 */
const updateAppointmentStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status, message } = req.body;
    const validStatuses = ['CONFIRMED', 'COMPLETED', 'CANCELLED'];

    if (!validStatuses.includes(status)) {
      return res.status(400).json({ error: `Status must be one of: ${validStatuses.join(', ')}` });
    }

    // Ensure appointment belongs to this counselor
    const existing = await prisma.appointment.findFirst({
      where: { id, counselorId: req.user.id },
    });
    if (!existing) {
      return res.status(404).json({ error: 'Appointment not found' });
    }

    const appointment = await prisma.appointment.update({
      where: { id },
      data: { status },
      include: {
        student: { select: { fullName: true, email: true } },
      },
    });

    // Create persistent notification for student
    const statusLabel = status === 'CONFIRMED' ? 'Confirmed' : status === 'CANCELLED' ? 'Cancelled' : status;
    let notifMessage = `Your appointment with ${req.user.fullName} has been ${statusLabel.toLowerCase()}.`;
    if (message) {
      notifMessage += `\n\nCounselor's Note:\n${message}`;
    }
    
    // If confirmed, append query parameters to start chat
    const linkPath = status === 'CONFIRMED' 
      ? `/user/appointments?action=startChat&counselorId=${req.user.id}`
      : '/user/appointments';

    const notification = await createNotification({
      userId: appointment.studentId,
      type: 'APPOINTMENT',
      title: `Appointment ${statusLabel}`,
      message: notifMessage,
      link: linkPath,
    });

    // Notify student in real-time
    const io = req.app.get('io');
    if (io) {
      io.to(`user_${appointment.studentId}`).emit('appointment_updated', {
        appointmentId: id,
        status,
        counselorName: req.user.fullName,
      });
      if (notification) {
        io.to(`user_${appointment.studentId}`).emit('new_notification', notification);
      }
    }

    res.json({ appointment });
  } catch (error) {
    console.error('updateAppointmentStatus error:', error);
    res.status(500).json({ error: 'Failed to update appointment status' });
  }
};

/**
 * GET /api/counselor/listen-only
 * Fetch all vent messages assigned to the logged-in counselor (COUNSELOR)
 */
const getListenOnlyMessages = async (req, res) => {
  try {
    const { status } = req.query;
    const where = { counselorId: req.user.id };
    if (status) where.status = status.toUpperCase();

    const vents = await prisma.ventMessage.findMany({
      where,
      include: {
        student: {
          select: { id: true, fullName: true, alias: true, avatarUrl: true },
        },
      },
      orderBy: { createdAt: 'desc' },
    });

    res.json({ vents });
  } catch (error) {
    console.error('getListenOnlyMessages error:', error);
    res.status(500).json({ error: 'Failed to fetch vent messages' });
  }
};

/**
 * POST /api/counselor/listen-only/:id/react
 * Add a supportive reaction to a vent message (COUNSELOR)
 * Body: { reaction } — e.g. "❤️ We're here for you"
 */
const reactToVent = async (req, res) => {
  try {
    const { id } = req.params;
    const { reaction } = req.body;

    if (!reaction) {
      return res.status(400).json({ error: 'Reaction is required' });
    }

    // Ensure vent belongs to this counselor
    const existing = await prisma.ventMessage.findFirst({
      where: { id, counselorId: req.user.id },
    });
    if (!existing) {
      return res.status(404).json({ error: 'Vent message not found' });
    }

    const updatedVent = await prisma.ventMessage.update({
      where: { id },
      data: {
        reactions: { push: reaction },
        status: 'REACTED',
      },
    });

    // Create persistent notification for student
    const notification = await createNotification({
      userId: existing.studentId,
      type: 'VENT',
      title: 'Your vent received a reaction',
      message: `${req.user.fullName} reacted: ${reaction}`,
      link: '/user/appointments',
    });

    // Notify the student in real-time
    const io = req.app.get('io');
    if (io) {
      io.to(`user_${existing.studentId}`).emit('vent_reaction', {
        ventId: id,
        reaction,
        counselorName: req.user.fullName,
      });
      if (notification) {
        io.to(`user_${existing.studentId}`).emit('new_notification', notification);
      }
    }

    res.json({ ventMessage: updatedVent });
  } catch (error) {
    console.error('reactToVent error:', error);
    res.status(500).json({ error: 'Failed to react to vent' });
  }
};

/**
 * PUT /api/counselor/availability
 * Toggle counselor availability for vent/chat assignment (COUNSELOR)
 * Body: { isAvailable: boolean }
 */
const toggleAvailability = async (req, res) => {
  try {
    const { isAvailable } = req.body;

    if (typeof isAvailable !== 'boolean') {
      return res.status(400).json({ error: 'isAvailable must be a boolean' });
    }

    const profile = await prisma.counselorProfile.upsert({
      where: { userId: req.user.id },
      update: { isAvailable },
      create: {
        userId: req.user.id,
        isAvailable,
      },
    });

    res.json({ isAvailable: profile.isAvailable });
  } catch (error) {
    console.error('toggleAvailability error:', error);
    res.status(500).json({ error: 'Failed to update availability' });
  }
};

/**
 * GET /api/counselor/availability
 * Get current counselor availability status (COUNSELOR)
 */
const getAvailability = async (req, res) => {
  try {
    const profile = await prisma.counselorProfile.findUnique({
      where: { userId: req.user.id },
      select: { isAvailable: true },
    });

    res.json({ isAvailable: profile?.isAvailable ?? true });
  } catch (error) {
    console.error('getAvailability error:', error);
    res.status(500).json({ error: 'Failed to fetch availability' });
  }
};

module.exports = {
  getMyAppointments,
  updateAppointmentStatus,
  getListenOnlyMessages,
  reactToVent,
  toggleAvailability,
  getAvailability,
};
