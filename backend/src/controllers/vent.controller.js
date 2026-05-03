const prisma = require('../config/db');

/**
 * POST /api/appointments/venting
 * Student submits a vent message; auto-assigns to a random available counselor (STUDENT)
 * Body: { content }
 */
const submitVent = async (req, res) => {
  try {
    const { content } = req.body;
    const studentId = req.user.id;

    if (!content || !content.trim()) {
      return res.status(400).json({ error: 'Content is required' });
    }

    // Find counselors who are ACTIVE and have marked themselves as available
    const counselors = await prisma.user.findMany({
      where: {
        role: 'COUNSELOR',
        status: 'ACTIVE',
        counselorProfile: { isAvailable: true },
      },
      select: { id: true },
    });

    if (counselors.length === 0) {
      return res.status(503).json({
        error: 'No counselors are currently available. Please try again later.',
      });
    }

    // Least-load assignment: pick the counselor with fewest UNREAD vents
    const ventCounts = await prisma.ventMessage.groupBy({
      by: ['counselorId'],
      where: {
        counselorId: { in: counselors.map((c) => c.id) },
        status: 'UNREAD',
      },
      _count: { id: true },
    });

    const countMap = {};
    counselors.forEach((c) => (countMap[c.id] = 0));
    ventCounts.forEach((v) => (countMap[v.counselorId] = v._count.id));

    // Sort ascending by unread count, pick the first (least loaded)
    const sorted = Object.entries(countMap).sort((a, b) => a[1] - b[1]);
    const counselorId = sorted[0][0];

    const ventMessage = await prisma.ventMessage.create({
      data: {
        studentId,
        counselorId,
        content: content.trim(),
        reactions: [],
        status: 'UNREAD',
      },
    });

    // Emit real-time notification to counselor
    const io = req.app.get('io');
    if (io) {
      io.to(`counselor_${counselorId}`).emit('new_vent', {
        ventId: ventMessage.id,
        studentId,
        preview: content.trim().substring(0, 80),
      });
    }

    res.status(201).json({ ventMessage });
  } catch (error) {
    console.error('submitVent error:', error);
    res.status(500).json({ error: 'Failed to submit vent message' });
  }
};

/**
 * GET /api/appointments/venting/my
 * Fetch the logged-in student's own vent history (STUDENT)
 */
const getMyVents = async (req, res) => {
  try {
    const vents = await prisma.ventMessage.findMany({
      where: { studentId: req.user.id },
      orderBy: { createdAt: 'desc' },
    });

    res.json({ vents });
  } catch (error) {
    console.error('getMyVents error:', error);
    res.status(500).json({ error: 'Failed to fetch vent history' });
  }
};

module.exports = { submitVent, getMyVents };
