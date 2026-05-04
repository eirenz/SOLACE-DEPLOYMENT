const prisma = require('../config/db');
const bcrypt = require('bcryptjs');
const { generateAlias } = require('../utils/aliasGenerator');

const MOOD_SCORES = { HAPPY: 5, NEUTRAL: 4, STRESSED: 3, SAD: 2, ANGRY: 1 };
const NEGATIVE_MOODS = new Set(['SAD', 'ANGRY', 'STRESSED']);

/**
 * GET /api/admin/appointments
 * Fetch ALL appointments across the system (ADMIN)
 * Query: status, counselorId, page, limit
 */
const getAllAppointments = async (req, res) => {
  try {
    const { status, counselorId, page = 1, limit = 20 } = req.query;
    const skip = (parseInt(page) - 1) * parseInt(limit);

    const where = {};
    if (status) where.status = status.toUpperCase();
    if (counselorId) where.counselorId = counselorId;

    const [appointments, total] = await Promise.all([
      prisma.appointment.findMany({
        where,
        include: {
          student: { select: { id: true, fullName: true, email: true, avatarUrl: true, alias: true } },
          counselor: { select: { id: true, fullName: true, email: true, avatarUrl: true } },
        },
        orderBy: { date: 'desc' },
        skip,
        take: parseInt(limit),
      }),
      prisma.appointment.count({ where }),
    ]);

    res.json({ appointments, total, page: parseInt(page), limit: parseInt(limit) });
  } catch (error) {
    console.error('getAllAppointments error:', error);
    res.status(500).json({ error: 'Failed to fetch appointments' });
  }
};

/**
 * GET /api/admin/appointments/stats
 * Get appointment stats: today, upcoming, completed, total (ADMIN)
 */
const getAppointmentStats = async (req, res) => {
  try {
    const now = new Date();
    const startOfToday = new Date(now);
    startOfToday.setHours(0, 0, 0, 0);
    const endOfToday = new Date(now);
    endOfToday.setHours(23, 59, 59, 999);

    const [today, upcoming, completed, cancelled, total] = await Promise.all([
      prisma.appointment.count({
        where: { date: { gte: startOfToday, lte: endOfToday }, status: { in: ['PENDING', 'CONFIRMED'] } },
      }),
      prisma.appointment.count({
        where: { date: { gt: endOfToday }, status: { in: ['PENDING', 'CONFIRMED'] } },
      }),
      prisma.appointment.count({ where: { status: 'COMPLETED' } }),
      prisma.appointment.count({ where: { status: 'CANCELLED' } }),
      prisma.appointment.count(),
    ]);

    res.json({ stats: { today, upcoming, completed, cancelled, total } });
  } catch (error) {
    console.error('getAppointmentStats error:', error);
    res.status(500).json({ error: 'Failed to fetch appointment stats' });
  }
};

/**
 * GET /api/admin/mood-monitoring
 * Classify all students by mood priority based on last 7 days of check-ins (ADMIN)
 */
const getUserMoodMonitoring = async (req, res) => {
  try {
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
    sevenDaysAgo.setHours(0, 0, 0, 0);

    // Fetch all students with their last 7 days of check-ins
    const students = await prisma.user.findMany({
      where: { role: 'STUDENT', status: 'ACTIVE' },
      select: {
        id: true,
        fullName: true,
        alias: true,
        avatarUrl: true,
        moodCheckins: {
          where: { createdAt: { gte: sevenDaysAgo } },
          orderBy: { createdAt: 'desc' },
          select: { mood: true, createdAt: true },
        },
      },
    });

    // Classify each student
    const classified = { normal: [], moderate: [], high_priority: [] };
    let topHighPriority = null;
    let maxNegativeStreak = -1;

    for (const student of students) {
      const checkins = student.moodCheckins;

      if (checkins.length === 0) {
        // No data in last 7 days — treat as normal
        classified.normal.push({
          id: student.id,
          fullName: student.fullName,
          alias: student.alias,
          avatarUrl: student.avatarUrl,
          latestMood: null,
          streak: 0,
          lastCheckIn: null,
        });
        continue;
      }

      // Average mood score over last 7 days
      const avgScore = checkins.reduce((sum, c) => sum + (MOOD_SCORES[c.mood] || 3), 0) / checkins.length;

      // Consecutive negative streak (starting from most recent)
      let streak = 0;
      for (const c of checkins) {
        if (NEGATIVE_MOODS.has(c.mood)) streak++;
        else break;
      }

      const latestMood = checkins[0]?.mood || null;
      const lastCheckIn = checkins[0]?.createdAt || null;

      const userEntry = {
        id: student.id,
        fullName: student.fullName,
        alias: student.alias,
        avatarUrl: student.avatarUrl,
        latestMood,
        streak,
        lastCheckIn,
      };

      // Classification rules
      const isHighPriority = avgScore <= 2.5 || streak >= 3;
      const isModerate = !isHighPriority && avgScore <= 3.5;

      if (isHighPriority) {
        classified.high_priority.push(userEntry);
        // Track the "most urgent" for the alert box
        if (streak > maxNegativeStreak) {
          maxNegativeStreak = streak;
          topHighPriority = { ...userEntry, consecutiveNegativeDays: streak };
        }
      } else if (isModerate) {
        classified.moderate.push(userEntry);
      } else {
        classified.normal.push(userEntry);
      }
    }

    // Build 7-day trend (how many users in each category per day)
    const trend = [];
    for (let i = 6; i >= 0; i--) {
      const dayStart = new Date();
      dayStart.setDate(dayStart.getDate() - i);
      dayStart.setHours(0, 0, 0, 0);
      const dayEnd = new Date(dayStart);
      dayEnd.setHours(23, 59, 59, 999);

      const checkins = await prisma.moodCheckin.findMany({
        where: { createdAt: { gte: dayStart, lte: dayEnd } },
        include: { user: { select: { role: true, status: true } } },
      });

      const studentChekins = checkins.filter(c => c.user.role === 'STUDENT' && c.user.status === 'ACTIVE');

      let normal = 0, moderate = 0, highPriority = 0;
      for (const c of studentChekins) {
        const score = MOOD_SCORES[c.mood] || 3;
        if (score <= 2) highPriority++;
        else if (score <= 3) moderate++;
        else normal++;
      }

      trend.push({
        date: dayStart.toISOString().split('T')[0],
        day: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][dayStart.getDay()],
        normal,
        moderate,
        high_priority: highPriority,
      });
    }

    res.json({
      summary: {
        normal: classified.normal.length,
        moderate: classified.moderate.length,
        high_priority: classified.high_priority.length,
      },
      highPriorityAlert: topHighPriority,
      users: classified,
      trend,
    });
  } catch (error) {
    console.error('getUserMoodMonitoring error:', error);
    res.status(500).json({ error: 'Failed to fetch mood monitoring data' });
  }
};

/**
 * GET /api/admin/mood-monitoring/:userId/history
 * Get full check-in history for a specific student (ADMIN)
 */
const getUserMoodHistory = async (req, res) => {
  try {
    const { userId } = req.params;
    const { year, month } = req.query;

    const startDate = year && month
      ? new Date(parseInt(year), parseInt(month) - 1, 1)
      : new Date(new Date().getFullYear(), new Date().getMonth(), 1);
    const endDate = new Date(startDate.getFullYear(), startDate.getMonth() + 1, 0, 23, 59, 59, 999);

    const checkins = await prisma.moodCheckin.findMany({
      where: {
        userId,
        createdAt: { gte: startDate, lte: endDate },
      },
      orderBy: { createdAt: 'asc' },
      select: { mood: true, createdAt: true },
    });

    // Build a dayOfMonth -> mood map
    const moodByDay = {};
    for (const c of checkins) {
      const day = new Date(c.createdAt).getDate();
      moodByDay[day] = c.mood;
    }

    res.json({
      year: startDate.getFullYear(),
      month: startDate.getMonth() + 1,
      moodByDay,
    });
  } catch (error) {
    console.error('getUserMoodHistory error:', error);
    res.status(500).json({ error: 'Failed to fetch mood history' });
  }
};

/**
 * POST /api/admin/mood-monitoring/:userId/message
 * Send a support notification directly to a high-priority user (ADMIN)
 */
const sendSupportMessage = async (req, res) => {
  try {
    const { userId } = req.params;
    const { title, message } = req.body;

    const notification = await prisma.notification.create({
      data: {
        userId,
        type: 'CHAT', // Using existing CHAT type so it renders nicely in user's bell dropdown
        title: title || 'We Care About You',
        message: message || "We've noticed you've been feeling stressed frequently this week. You're not alone, and we're here to help.",
        link: '/user/appointments', // Directs them to book a session
      }
    });

    // Emit via Socket.io directly to the student
    if (req.app.get('io')) {
      req.app.get('io').to(`user_${userId}`).emit('new_notification', notification);
    }

    res.json({ success: true, notification });
  } catch (error) {
    console.error('sendSupportMessage error:', error);
    res.status(500).json({ error: 'Failed to send support message' });
  }
};

const getReportedPosts = async (req, res) => {
  try {
    const reports = await prisma.postReport.findMany({
      orderBy: { createdAt: 'desc' },
      include: {
        post: {
          select: {
            id: true,
            title: true,
            content: true,
            author: { select: { id: true, fullName: true, alias: true } },
          },
        },
        reporter: { select: { id: true, fullName: true, alias: true } },
      },
    });

    const formatted = reports.map((report) => ({
      id: report.id,
      status: report.status,
      reason: report.reason,
      createdAt: report.createdAt,
      reporter: {
        id: report.reporter.id,
        fullName: report.reporter.fullName,
        alias: report.reporter.alias,
      },
      post: {
        id: report.post.id,
        title: report.post.title,
        content: report.post.content,
        author: {
          id: report.post.author.id,
          fullName: report.post.author.fullName,
          alias: report.post.author.alias,
        },
      },
    }));

    res.json({ reports: formatted });
  } catch (error) {
    console.error('getReportedPosts error:', error);
    res.status(500).json({ error: 'Failed to fetch flagged content' });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const { role, status } = req.query;
    const where = {};
    if (role) where.role = role.toUpperCase();
    if (status) where.status = status.toUpperCase();

    const users = await prisma.user.findMany({
      where,
      include: {
        counselorProfile: {
          select: {
            employeeId: true,
            workPhone: true,
            license: true,
            specialization: true,
            officeLocation: true,
            experience: true,
          },
        },
      },
      orderBy: { fullName: 'asc' },
    });

    res.json({ users });
  } catch (error) {
    console.error('getAllUsers error:', error);
    res.status(500).json({ error: 'Failed to fetch users' });
  }
};

/**
 * PATCH /api/admin/users/:userId/status
 * Toggle user status between ACTIVE and SUSPENDED (ADMIN)
 */
const updateUserStatus = async (req, res) => {
  try {
    const { userId } = req.params;
    const { status } = req.body; // 'ACTIVE' or 'SUSPENDED'

    if (!['ACTIVE', 'SUSPENDED'].includes(status)) {
      return res.status(400).json({ error: 'Status must be ACTIVE or SUSPENDED' });
    }

    const user = await prisma.user.update({
      where: { id: userId },
      data: { status },
      select: { id: true, fullName: true, email: true, status: true, role: true },
    });

    res.json({ success: true, user });
  } catch (error) {
    console.error('updateUserStatus error:', error);
    res.status(500).json({ error: 'Failed to update user status' });
  }
};

/**
 * PATCH /api/admin/reports/:reportId/status
 * Update report status to REVIEWED or DISMISSED (ADMIN)
 */
const updateReportStatus = async (req, res) => {
  try {
    const { reportId } = req.params;
    const { status } = req.body; // 'REVIEWED' or 'DISMISSED'

    if (!['REVIEWED', 'DISMISSED', 'PENDING'].includes(status)) {
      return res.status(400).json({ error: 'Status must be PENDING, REVIEWED, or DISMISSED' });
    }

    const report = await prisma.postReport.update({
      where: { id: reportId },
      data: { status },
    });

    res.json({ success: true, report });
  } catch (error) {
    console.error('updateReportStatus error:', error);
    res.status(500).json({ error: 'Failed to update report status' });
  }
};

/**
 * POST /api/admin/reports/:reportId/resolve
 * Resolves a report by deleting the post and warning the user.
 * If user hits 5 warnings, suspends them.
 */
const resolveReportedPost = async (req, res) => {
  try {
    const { reportId } = req.params;
    
    // Find report and associated post/author
    const report = await prisma.postReport.findUnique({
      where: { id: reportId },
      include: {
        post: {
          include: {
            author: true
          }
        }
      }
    });

    if (!report || !report.post) {
      return res.status(404).json({ error: 'Report or Post not found' });
    }

    const post = report.post;
    const author = post.author;
    let newWarningCount = (author.warningCount || 0) + 1;
    let newStatus = author.status;
    let isSuspended = false;

    if (newWarningCount >= 5) {
      newStatus = 'SUSPENDED';
      isSuspended = true;
    }

    // Update user
    await prisma.user.update({
      where: { id: author.id },
      data: {
        warningCount: newWarningCount,
        status: newStatus
      }
    });

    // Notify user
    await prisma.notification.create({
      data: {
        userId: author.id,
        type: 'WARNING',
        title: isSuspended ? 'Account Suspended' : 'Content Violation Warning',
        message: isSuspended 
          ? `Your account has been temporarily suspended because you reached 5 content warnings. The post "${post.title}" was removed.` 
          : `Your post "${post.title}" was removed for violating community guidelines. You now have ${newWarningCount} warning(s). 5 warnings will lead to an account suspension.`,
      }
    });

    // Delete post (this will cascade and delete the report)
    await prisma.communityPost.delete({
      where: { id: post.id }
    });

    res.json({ success: true, message: 'Post deleted and user warned' });
  } catch (error) {
    console.error('resolveReportedPost error:', error);
    res.status(500).json({ error: 'Failed to resolve report' });
  }
};

/**
 * DELETE /api/admin/users/:userId
 * Delete a user (and their counselor profile if applicable) (ADMIN)
 */
const deleteUser = async (req, res) => {
  try {
    const { userId } = req.params;

    await prisma.user.delete({
      where: { id: userId },
    });

    res.json({ success: true, message: 'User deleted successfully' });
  } catch (error) {
    console.error('deleteUser error:', error);
    res.status(500).json({ error: 'Failed to delete user' });
  }
};

/**
 * GET /api/admin/dashboard-stats
 * Aggregate stats for the admin dashboard: user counts, appointment counts, report counts, 
 * high-priority students, recent reports, and upcoming appointments (ADMIN)
 */
const getDashboardStats = async (req, res) => {
  try {
    const now = new Date();
    const startOfToday = new Date(now);
    startOfToday.setHours(0, 0, 0, 0);
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
    sevenDaysAgo.setHours(0, 0, 0, 0);

    // Counts
    const [totalUsers, totalAppointments, totalReports, totalCounselors] = await Promise.all([
      prisma.user.count({ where: { role: { in: ['STUDENT', 'COUNSELOR'] } } }),
      prisma.appointment.count(),
      prisma.postReport.count({ where: { status: 'PENDING' } }),
      prisma.user.count({ where: { role: 'COUNSELOR' } }),
    ]);

    // High priority students (negative mood streak >= 3 in last 7 days)
    const students = await prisma.user.findMany({
      where: { role: 'STUDENT', status: 'ACTIVE' },
      select: {
        id: true,
        fullName: true,
        alias: true,
        avatarUrl: true,
        moodCheckins: {
          where: { createdAt: { gte: sevenDaysAgo } },
          orderBy: { createdAt: 'desc' },
          select: { mood: true, createdAt: true },
        },
      },
    });

    const highPriority = [];
    for (const student of students) {
      if (student.moodCheckins.length === 0) continue;
      
      const checkins = student.moodCheckins;
      const avgScore = checkins.reduce((sum, c) => sum + (MOOD_SCORES[c.mood] || 3), 0) / checkins.length;
      
      let streak = 0;
      for (const c of checkins) {
        if (NEGATIVE_MOODS.has(c.mood)) streak++;
        else break;
      }
      
      if (avgScore <= 2.5 || streak >= 3) {
        highPriority.push({
          id: student.id,
          fullName: student.fullName,
          alias: student.alias,
          avatarUrl: student.avatarUrl,
          streak: `${streak} days`,
          latestMood: checkins[0]?.mood || null,
        });
      }
    }

    // Recent pending reports (limit 5)
    const recentReports = await prisma.postReport.findMany({
      where: { status: 'PENDING' },
      orderBy: { createdAt: 'desc' },
      take: 5,
      include: {
        reporter: { select: { fullName: true, alias: true } },
        post: { select: { title: true } },
      },
    });

    const formattedReports = recentReports.map((r) => ({
      name: r.reporter.fullName || r.reporter.alias || 'Unknown',
      remarks: r.reason,
      status: r.status,
    }));

    // Upcoming appointments (limit 5)
    const upcomingAppointments = await prisma.appointment.findMany({
      where: { date: { gte: startOfToday }, status: { in: ['PENDING', 'CONFIRMED'] } },
      orderBy: { date: 'asc' },
      take: 5,
      include: {
        student: { select: { fullName: true, alias: true, avatarUrl: true } },
      },
    });

    const formattedAppointments = upcomingAppointments.map((a) => ({
      date: a.date.toLocaleDateString('en-US', { weekday: 'short', day: 'numeric', month: 'long' }).toUpperCase(),
      time: a.timeSlot,
      name: a.student.fullName || a.student.alias || 'Student',
      text: a.notes || 'Counseling session',
    }));

    // Build 7-day emotional trend (how many users in each category per day)
    const trend = [];
    for (let i = 6; i >= 0; i--) {
      const dayStart = new Date();
      dayStart.setDate(dayStart.getDate() - i);
      dayStart.setHours(0, 0, 0, 0);
      const dayEnd = new Date(dayStart);
      dayEnd.setHours(23, 59, 59, 999);

      const dayCheckins = await prisma.moodCheckin.findMany({
        where: { createdAt: { gte: dayStart, lte: dayEnd } },
        include: { user: { select: { role: true, status: true } } },
      });

      const studentCheckins = dayCheckins.filter(c => c.user.role === 'STUDENT' && c.user.status === 'ACTIVE');

      let normal = 0, moderate = 0, highPriorityCount = 0;
      for (const c of studentCheckins) {
        const score = MOOD_SCORES[c.mood] || 3;
        if (score <= 2) highPriorityCount++;
        else if (score <= 3) moderate++;
        else normal++;
      }

      trend.push({
        date: dayStart.toISOString().split('T')[0],
        day: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][dayStart.getDay()],
        normal,
        moderate,
        high_priority: highPriorityCount,
      });
    }

    res.json({
      stats: {
        totalUsers,
        totalAppointments,
        totalReports,
        totalCounselors,
      },
      highPriority,
      reviewReports: formattedReports,
      scheduledAppointments: formattedAppointments,
      trend,
    });
  } catch (error) {
    console.error('getDashboardStats error:', error);
    res.status(500).json({ error: 'Failed to fetch dashboard stats' });
  }
};

/**
 * POST /api/admin/counselors
 * Create a brand-new counselor account with profile (ADMIN)
 * Body: { fullName, email, password, employeeId?, workPhone?, license?, specialization?, officeLocation?, experience? }
 */
const createCounselor = async (req, res) => {
  try {
    const { fullName, email, password, employeeId, workPhone, license, specialization, officeLocation, experience } = req.body;

    if (!fullName || !email || !password) {
      return res.status(400).json({ error: 'Full name, email, and password are required' });
    }

    // Check if email already exists
    const existing = await prisma.user.findUnique({ where: { email } });
    if (existing) {
      return res.status(409).json({ error: 'An account with this email already exists' });
    }

    // Hash password
    const salt = await bcrypt.genSalt(12);
    const passwordHash = await bcrypt.hash(password, salt);
    const alias = generateAlias();

    // Create user + counselor profile in a transaction
    const user = await prisma.user.create({
      data: {
        fullName,
        email,
        passwordHash,
        role: 'COUNSELOR',
        alias,
        counselorProfile: {
          create: {
            employeeId: employeeId || null,
            workPhone: workPhone || null,
            license: license || null,
            specialization: specialization || null,
            officeLocation: officeLocation || null,
            experience: experience || null,
          },
        },
      },
      include: {
        counselorProfile: true,
      },
    });

    // Remove passwordHash from response
    const { passwordHash: _, ...userData } = user;

    res.status(201).json({ success: true, user: userData });
  } catch (error) {
    console.error('createCounselor error:', error);
    res.status(500).json({ error: 'Failed to create counselor account' });
  }
};

/**
 * PATCH /api/admin/users/:userId/role
 * Promote/change a user's role (e.g. STUDENT → COUNSELOR) (ADMIN)
 * Body: { role } — currently only 'COUNSELOR' is supported
 */
const promoteToCouncelor = async (req, res) => {
  try {
    const { userId } = req.params;
    const { role } = req.body;

    if (role !== 'COUNSELOR') {
      return res.status(400).json({ error: 'Only promotion to COUNSELOR is supported' });
    }

    // Verify user exists
    const existingUser = await prisma.user.findUnique({
      where: { id: userId },
      include: { counselorProfile: true },
    });

    if (!existingUser) {
      return res.status(404).json({ error: 'User not found' });
    }

    if (existingUser.role === 'COUNSELOR') {
      return res.status(400).json({ error: 'User is already a counselor' });
    }

    if (existingUser.role === 'ADMIN') {
      return res.status(400).json({ error: 'Cannot change an admin\'s role' });
    }

    // Update role and create counselor profile if needed
    const updateData = { role: 'COUNSELOR' };

    const user = await prisma.user.update({
      where: { id: userId },
      data: updateData,
      select: { id: true, fullName: true, email: true, role: true, status: true },
    });

    // Create counselor profile if one doesn't exist
    if (!existingUser.counselorProfile) {
      await prisma.counselorProfile.create({
        data: { userId },
      });
    }

    res.json({ success: true, user });
  } catch (error) {
    console.error('promoteToCouncelor error:', error);
    res.status(500).json({ error: 'Failed to update user role' });
  }
};

module.exports = {
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
  promoteToCouncelor,
};
