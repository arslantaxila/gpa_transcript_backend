const { getTranscripts, updateTranscriptStatus, deleteTranscript } = require('../models/transcript');

const viewApplications = async (req, res) => {
  try {
    const transcripts = await getTranscripts();
    res.json(transcripts);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching transcript applications', error });
  }
};

const updateApplicationStatus = async (req, res) => {
  const { id, status } = req.body;

  try {
    await updateTranscriptStatus(id, status);
    res.json({ message: 'Application status updated' });
  } catch (error) {
    res.status(500).json({ message: 'Error updating application status', error });
  }
};

const deleteApplication = async (req, res) => {
  const { id } = req.body;

  try {
    await deleteTranscript(id);
    res.json({ message: 'Application deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting application', error });
  }
};

module.exports = { viewApplications, updateApplicationStatus, deleteApplication };