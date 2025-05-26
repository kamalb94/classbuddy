const Feedback = require('../models/feedbackModel');

// Submit feedback
exports.submitFeedback = async (req, res) => {
  const { sessionId, fromStudent, toStudent, feedbackText, score } = req.body;
  try {
    const existing = await Feedback.findOne({ sessionId, fromStudent, toStudent });
    if (existing) return res.status(400).json({ error: 'Feedback already submitted' });

    const feedback = new Feedback({ sessionId, fromStudent, toStudent, feedbackText, score });
    await feedback.save();
    res.status(200).json({ message: 'Feedback submitted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get all feedback for a session
exports.getFeedbackBySession = async (req, res) => {
  try {
    const feedbacks = await Feedback.find({ sessionId: req.params.id }).populate('toStudent fromStudent', 'name');
    res.status(200).json(feedbacks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get feedback received by a student
exports.getFeedbackForStudent = async (req, res) => {
  try {
    const feedbacks = await Feedback.find({ toStudent: req.params.studentId });
    res.status(200).json(feedbacks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
