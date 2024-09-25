const express = require('express');
const { submitTranscriptApplication } = require('../controllers/transcriptController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/submit', authMiddleware, submitTranscriptApplication);

module.exports = router;