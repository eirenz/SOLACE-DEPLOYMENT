const prisma = require('../config/db');

const getResetBoundary = (date = new Date()) => {
  const resetTime = new Date(date);
  resetTime.setHours(8, 0, 0, 0);

  if (date < resetTime) {
    const start = new Date(resetTime);
    start.setDate(start.getDate() - 1);
    return { start, end: resetTime };
  } else {
    const end = new Date(resetTime);
    end.setDate(end.getDate() + 1);
    return { start: resetTime, end };
  }
};

// @desc    Create a new mood check-in
// @route   POST /api/checkins
// @access  Private (Student)
const createCheckin = async (req, res, next) => {
  try {
    const { mood, quote, tasks } = req.body;
    const userId = req.user.id;

    // QA/DEMO TEST ACCOUNT BYPASS: Allow unlimited check-ins for this specific email
    if (req.user.email === 'testcheckin@solace.com') {
      // Skip the duplicate check entirely
      
    } else {
      // Normal logic: Check if user already checked in today (based on 8 AM reset)
      const { start: todayStart, end: tomorrowStart } = getResetBoundary(new Date());
  
      const existingCheckin = await prisma.moodCheckin.findFirst({
        where: {
          userId,
          createdAt: {
            gte: todayStart,
            lt: tomorrowStart,
          },
        },
      });
  
      if (existingCheckin) {
        return res.status(400).json({ error: 'You have already checked in today.' });
      }
    }

    const checkin = await prisma.moodCheckin.create({
      data: {
        userId,
        mood,
        quote,
        tasks,
      },
    });

    res.status(201).json({
      message: 'Mood check-in recorded successfully',
      checkin,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get user's check-in history
// @route   GET /api/checkins/history
// @access  Private
const getCheckinHistory = async (req, res, next) => {
  try {
    const userId = req.user.id;
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    const [checkins, total] = await Promise.all([
      prisma.moodCheckin.findMany({
        where: { userId },
        orderBy: { createdAt: 'desc' },
        skip,
        take: limit,
      }),
      prisma.moodCheckin.count({ where: { userId } }),
    ]);

    res.json({
      checkins,
      pagination: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get today's check-in
// @route   GET /api/checkins/today
// @access  Private
const getTodayCheckin = async (req, res, next) => {
  try {
    const userId = req.user.id;
    const { start: todayStart, end: tomorrowStart } = getResetBoundary(new Date());

    const checkin = await prisma.moodCheckin.findFirst({
      where: {
        userId,
        createdAt: {
          gte: todayStart,
          lt: tomorrowStart,
        },
      },
    });

    res.json(checkin || null); // Return null if no check-in today
  } catch (error) {
    next(error);
  }
};

// @desc    Get mood statistics
// @route   GET /api/checkins/analysis
// @access  Private
const getMoodStats = async (req, res, next) => {
  try {
    const userId = req.user.id;
    
    // Simple grouping by mood to get counts
    const stats = await prisma.moodCheckin.groupBy({
      by: ['mood'],
      where: { userId },
      _count: {
        mood: true,
      },
    });

    // Format output
    const formattedStats = stats.reduce((acc, curr) => {
      acc[curr.mood] = curr._count.mood;
      return acc;
    }, {});

    res.json({ stats: formattedStats });
  } catch (error) {
    next(error);
  }
};

// @desc    Get weekly mood analysis (4 weeks of the month)
// @route   GET /api/checkins/weekly-analysis
// @access  Private
const getWeeklyMoodAnalysis = async (req, res, next) => {
  try {
    const userId = req.user.id;
    // Get month/year from query, default to current
    const month = parseInt(req.query.month) || new Date().getMonth() + 1; // 1-12
    const year = parseInt(req.query.year) || new Date().getFullYear();

    // Define standard emoji numeric values
    const moodValues = {
      'HAPPY': 5,
      'NEUTRAL': 4,
      'STRESSED': 3,
      'SAD': 2,
      'ANGRY': 1
    };

    // Calculate start and end of the requested month
    const startDate = new Date(year, month - 1, 1);
    const endDate = new Date(year, month, 0, 23, 59, 59, 999);

    const checkins = await prisma.moodCheckin.findMany({
      where: {
        userId,
        createdAt: {
          gte: startDate,
          lte: endDate,
        },
      },
      orderBy: { createdAt: 'asc' }
    });

    const weeksData = {
      w1: { total: 0, count: 0 }, // Days 1-7
      w2: { total: 0, count: 0 }, // Days 8-14
      w3: { total: 0, count: 0 }, // Days 15-21
      w4: { total: 0, count: 0 }, // Days 22+
    };

    const isTestUser = req.user.email === 'testcheckin@solace.com';

    checkins.forEach((checkin, index) => {
      const val = moodValues[checkin.mood] || 0;

      if (val > 0) {
        if (isTestUser) {
          const weekIndex = Math.floor(index / 7);
          if (weekIndex === 0) {
            weeksData.w1.total += val; weeksData.w1.count++;
          } else if (weekIndex === 1) {
            weeksData.w2.total += val; weeksData.w2.count++;
          } else if (weekIndex === 2) {
            weeksData.w3.total += val; weeksData.w3.count++;
          } else {
            weeksData.w4.total += val; weeksData.w4.count++;
          }
        } else {
          let d = new Date(checkin.createdAt);
          if (d.getHours() < 8) {
            d.setDate(d.getDate() - 1);
          }
          const dayOfMonth = d.getDate();
          if (dayOfMonth <= 7) {
            weeksData.w1.total += val; weeksData.w1.count++;
          } else if (dayOfMonth <= 14) {
            weeksData.w2.total += val; weeksData.w2.count++;
          } else if (dayOfMonth <= 21) {
            weeksData.w3.total += val; weeksData.w3.count++;
          } else {
            weeksData.w4.total += val; weeksData.w4.count++;
          }
        }
      }
    });

    const calculateAvg = (w) => (w.count === 0 ? 0 : w.total / w.count);

    res.json({
      month,
      year,
      averages: [
        calculateAvg(weeksData.w1),
        calculateAvg(weeksData.w2),
        calculateAvg(weeksData.w3),
        calculateAvg(weeksData.w4),
      ],
      percentages: [
        (calculateAvg(weeksData.w1) / 5) * 100,
        (calculateAvg(weeksData.w2) / 5) * 100,
        (calculateAvg(weeksData.w3) / 5) * 100,
        (calculateAvg(weeksData.w4) / 5) * 100,
      ]
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get dynamic growth insights (correlating tasks with mood)
// @route   GET /api/checkins/growth-insights
// @access  Private
const getGrowthInsights = async (req, res, next) => {
  try {
    const userId = req.user.id;

    // Fetch last 50 check-ins with tasks
    const checkins = await prisma.moodCheckin.findMany({
      where: { userId },
      orderBy: { createdAt: 'desc' },
      take: 50,
      select: {
        mood: true,
        tasks: true
      }
    });

    if (checkins.length < 3) {
      return res.json({
        insight: "Keep checking in! Once you have more entries, I'll start finding patterns between your activities and your mood.",
        type: 'initial'
      });
    }

    const moodScores = {
      'HAPPY': 5,
      'NEUTRAL': 4,
      'STRESSED': 3,
      'SAD': 2,
      'ANGRY': 1
    };

    const taskStats = {}; // { taskId: { totalScore: 0, count: 0 } }

    checkins.forEach(checkin => {
      const score = moodScores[checkin.mood] || 3;
      checkin.tasks.forEach(task => {
        const cleanTask = task.trim().toLowerCase();
        if (!taskStats[cleanTask]) {
          taskStats[cleanTask] = { totalScore: 0, count: 0, originalName: task };
        }
        taskStats[cleanTask].totalScore += score;
        taskStats[cleanTask].count += 1;
      });
    });

    // Find task with highest average mood score (minimum 2 occurrences)
    let bestTask = null;
    let maxAvg = 0;

    Object.keys(taskStats).forEach(taskId => {
      const stats = taskStats[taskId];
      if (stats.count >= 2) {
        const avg = stats.totalScore / stats.count;
        if (avg > maxAvg) {
          maxAvg = avg;
          bestTask = stats.originalName;
        }
      }
    });

    if (bestTask && maxAvg >= 4) {
      const moodTerm = maxAvg >= 4.5 ? 'fantastic' : 'more balanced';
      return res.json({
        insight: `You tend to feel ${moodTerm} on days when you ${bestTask.toLowerCase()}. Shall we schedule some time for that?`,
        type: 'correlation',
        task: bestTask
      });
    }

    // Fallback encouraging message
    return res.json({
      insight: "Reflect on your growth: Consistency is key. Keeping track of your mood is the first step towards a balanced life.",
      type: 'generic'
    });

  } catch (error) {
    next(error);
  }
};

module.exports = {
  createCheckin,
  getCheckinHistory,
  getTodayCheckin,
  getMoodStats,
  getWeeklyMoodAnalysis,
  getGrowthInsights,
};
