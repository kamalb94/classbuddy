const mongoose = require('mongoose');

const SessionSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: String,

  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },

  participants: [{  // Optional: Restrict feedback only among listed users
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  }],

  isActive: {
    type: Boolean,
    default: true,
  },

  deadline: {
    type: Date,
  },

  allowAnonymous: {
    type: Boolean,
    default: true, // enable anonymous peer feedback
  },

  maxFeedbackPerStudent: {
    type: Number,
    default: 1, // to support anti-abuse (e.g., only 1 feedback per peer)
  },

}, { timestamps: true });

module.exports = mongoose.model('Session', SessionSchema);
