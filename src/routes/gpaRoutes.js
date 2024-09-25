const express = require('express');
const { calculateGPA } = require('../controllers/gpaController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/calculate', authMiddleware, calculateGPA);

module.exports = router;