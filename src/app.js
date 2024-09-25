const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const userRoutes = require('./routes/userRoutes');
const gpaRoutes = require('./routes/gpaRoutes');
const transcriptRoutes = require('./routes/transcriptRoutes');
const adminRoutes = require('./routes/adminRoutes');
const { connectDB } = require('./utils/database');
var cors = require("cors");

dotenv.config();

const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use('/api/users', userRoutes);
app.use('/api/gpa', gpaRoutes);
app.use('/api/transcripts', transcriptRoutes);
app.use('/api/admin', adminRoutes);

connectDB();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});