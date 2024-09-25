const { createTranscript } = require('../models/transcript');

const submitTranscriptApplication = async (req, res) => {
  const { studentName, studentId, program, contactInfo } = req.body;
  const userId = req.user.id;

  try {
    const transcriptId = await createTranscript(userId, studentName, studentId, program, contactInfo);
    res.status(201).json({ transcriptId });
  } catch (error) {
    res.status(500).json({ message: 'Error submitting transcript application', error });
  }
};

module.exports = { submitTranscriptApplication };