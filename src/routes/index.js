// src/server.js
const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const mysql = require('mysql2/promise');
const userRoutes = require('./userRoutes');
const ticketRoutes = require('./ticketRoutes');
const feedbackRoutes = require('./feedbackRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({ secret: 'secret', resave: true, saveUninitialized: true }));

// Routes
app.use('/users', userRoutes);
app.use('/tickets', ticketRoutes);
app.use('/feedback', feedbackRoutes);

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

