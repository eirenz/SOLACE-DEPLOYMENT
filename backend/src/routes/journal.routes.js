const express = require('express');
const router = express.Router();
const { authenticate } = require('../middleware/auth');
const { validate } = require('../middleware/validate');
const { createJournalSchema, updateJournalSchema } = require('../validators/journal.validator');
const {
  createJournal,
  getJournals,
  getJournalById,
  updateJournal,
  deleteJournal,
} = require('../controllers/journal.controller');

// All journal routes require authentication
router.use(authenticate);

router.post('/', validate(createJournalSchema), createJournal);
router.get('/', getJournals);
router.get('/:id', getJournalById);
router.put('/:id', validate(updateJournalSchema), updateJournal);
router.delete('/:id', deleteJournal);

module.exports = router;
