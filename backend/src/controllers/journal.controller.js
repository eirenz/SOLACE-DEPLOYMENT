const prisma = require('../config/db');

// @desc    Create a new journal entry
// @route   POST /api/journals
// @access  Private
const createJournal = async (req, res, next) => {
  try {
    const { title, content, mood } = req.body;
    const userId = req.user.id;

    const journal = await prisma.journalEntry.create({
      data: {
        userId,
        title,
        content,
        // If mood is not provided, the schema defaults it to NEUTRAL
        ...(mood && { mood }),
      },
    });

    res.status(201).json({
      message: 'Journal entry created successfully',
      journal,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get all journal entries for the user
// @route   GET /api/journals
// @access  Private
const getJournals = async (req, res, next) => {
  try {
    const userId = req.user.id;
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    const [journals, total] = await Promise.all([
      prisma.journalEntry.findMany({
        where: { userId },
        orderBy: { createdAt: 'desc' },
        skip,
        take: limit,
      }),
      prisma.journalEntry.count({ where: { userId } }),
    ]);

    res.json({
      journals,
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

// @desc    Get a specific journal entry by ID
// @route   GET /api/journals/:id
// @access  Private
const getJournalById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const userId = req.user.id;

    const journal = await prisma.journalEntry.findFirst({
      where: {
        id,
        userId, // Ensure the user owns this journal
      },
    });

    if (!journal) {
      return res.status(404).json({ error: 'Journal entry not found' });
    }

    res.json(journal);
  } catch (error) {
    next(error);
  }
};

// @desc    Update a journal entry
// @route   PUT /api/journals/:id
// @access  Private
const updateJournal = async (req, res, next) => {
  try {
    const { id } = req.params;
    const userId = req.user.id;
    const updateData = req.body;

    // First check if the journal exists and belongs to the user
    const existingJournal = await prisma.journalEntry.findFirst({
      where: { id, userId },
    });

    if (!existingJournal) {
      return res.status(404).json({ error: 'Journal entry not found' });
    }

    const updatedJournal = await prisma.journalEntry.update({
      where: { id },
      data: updateData,
    });

    res.json({
      message: 'Journal entry updated successfully',
      journal: updatedJournal,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Delete a journal entry
// @route   DELETE /api/journals/:id
// @access  Private
const deleteJournal = async (req, res, next) => {
  try {
    const { id } = req.params;
    const userId = req.user.id;

    // First check if the journal exists and belongs to the user
    const existingJournal = await prisma.journalEntry.findFirst({
      where: { id, userId },
    });

    if (!existingJournal) {
      return res.status(404).json({ error: 'Journal entry not found' });
    }

    await prisma.journalEntry.delete({
      where: { id },
    });

    res.json({ message: 'Journal entry deleted successfully' });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createJournal,
  getJournals,
  getJournalById,
  updateJournal,
  deleteJournal,
};
