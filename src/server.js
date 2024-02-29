// server.js
const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const mysqlPool = require('./db');
const ejs = require('ejs');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({ secret: 'secret', resave: true, saveUninitialized: true }));

// Routes
app.use('/', require('./routes/index'));

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
