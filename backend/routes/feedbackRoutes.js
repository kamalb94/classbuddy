const express = require('express');
const router = express.Router();
const {
  submitFeedback,
  getFeedbackBySession
} = require('../controllers/feedbackController');

router.post('/submit', submitFeedback);
router.get('/session/:id', getFeedbackBySession);

module.exports = router;
