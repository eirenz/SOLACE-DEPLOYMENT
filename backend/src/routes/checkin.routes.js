const express = require('express');
const router = express.Router();
const { authenticate } = require('../middleware/auth');
const { validate } = require('../middleware/validate');
const { createCheckinSchema } = require('../validators/checkin.validator');
const {
  createCheckin,
  getCheckinHistory,
  getTodayCheckin,
  getMoodStats,
  getWeeklyMoodAnalysis,
  getGrowthInsights,
} = require('../controllers/checkin.controller');

// All checkin routes require authentication
router.use(authenticate);

router.post('/', validate(createCheckinSchema), createCheckin);
router.get('/history', getCheckinHistory);
router.get('/today', getTodayCheckin);
router.get('/analysis', getMoodStats);
router.get('/weekly-analysis', getWeeklyMoodAnalysis);
router.get('/growth-insights', getGrowthInsights);

module.exports = router;
