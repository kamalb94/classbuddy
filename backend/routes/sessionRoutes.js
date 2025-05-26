const express = require('express');
const router = express.Router();
const {
  createSession,
  getAllSessions,
  getSessionById,
  deleteSession
} = require('../controllers/sessionController');

// @route   POST /api/sessions/
// @desc    Create a new feedback session
router.post('/new', createSession);

// @route   GET /api/sessions/
// @desc    Get all sessions
router.get('/all', getAllSessions);

// @route   GET /api/sessions/:id
// @desc    Get a session by ID
router.get('/:id', getSessionById);

// @route   DELETE /api/sessions/:id
// @desc    Delete a session by ID
router.delete('/remove/:id', deleteSession);

module.exports = router;
