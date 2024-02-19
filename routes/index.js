const express = require('express');
const router = express.Router();
const authRouter = require('./auth');
const studentRouter = require('./Student'); // Import the student routes

router.use('/auth', authRouter);
router.use('/students', studentRouter); // Use the student routes

module.exports = router;
