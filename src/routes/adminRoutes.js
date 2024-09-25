const express = require('express');
const { viewApplications, updateApplicationStatus, deleteApplication } = require('../controllers/adminController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.get('/applications', authMiddleware, viewApplications);
router.put('/applications/status', authMiddleware, updateApplicationStatus);
router.delete('/applications', authMiddleware, deleteApplication);

module.exports = router;