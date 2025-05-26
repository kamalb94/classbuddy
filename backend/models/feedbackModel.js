const mongoose = require('mongoose');

const FeedbackSchema = new mongoose.Schema({
  sessionId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Session',
    required: true,
  },
  fromStudent: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  toStudent: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  feedbackText: {
    type: String,
    required: true,
    maxlength: 500,
  },
  score: {
    type: Number,
    min: 1,
    max: 10,
    required: true,
  },
}, { timestamps: true });

module.exports = mongoose.model('Feedback', FeedbackSchema);
