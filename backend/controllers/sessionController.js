const Session = require('../models/sessionModel');

// Create a new session
exports.createSession = async (req, res) => {
  const {
    title,
    description,
    deadline,
    allowAnonymous = true,
    maxFeedbackPerStudent = 1,
  } = req.body;

  // Assume `createdBy` is derived from logged-in user (e.g., req.user._id)
  const createdBy = req.user?._id;

  if (!title || !createdBy) {
    return res.status(400).json({ error: "Title and createdBy are required." });
  }

  try {
    const session = new Session({
      title,
      description,
      deadline,
      allowAnonymous,
      maxFeedbackPerStudent,
      createdBy,  // from authenticated user
    });

    await session.save();

    const populatedSession = await session.populate('createdBy', 'name email');
    res.status(201).json(populatedSession);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};



// Get all sessions
exports.getAllSessions = async (req, res) => {
  try {
    const sessions = await Session.find()
      .populate('createdBy', 'name email')
      .populate('participants', 'name email');
    
    res.status(200).json(sessions);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


// Get session by ID
exports.getSessionById = async (req, res) => {
  try {
    const session = await Session.findById(req.params.id)
      .populate('createdBy', 'name email')
      .populate('participants', 'name email');

    if (!session) {
      return res.status(404).json({ error: 'Session not found' });
    }

    res.status(200).json(session);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


// Delete session
exports.deleteSession = async (req, res) => {
  try {
    const session = await Session.findByIdAndDelete(req.params.id);
    if (!session) {
      return res.status(404).json({ error: 'Session not found' });
    }

    res.status(200).json({ message: 'Session deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

