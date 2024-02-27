// src/routes/index.js
const express = require('express');
const router = express.Router();

const pool = require('../server'); // Import the MySQL connection from server.js

// Define routes
router.get('/', async (req, res) => {
    try {
        const [rows, fields] = await pool.query('SELECT * FROM events');
        // Implement your home route with MySQL data
        res.send('Hello, Event Management System with MySQL!');
    } catch (error) {
        console.error('Error fetching data from MySQL:', error);
        res.status(500).send('Internal Server Error');
    }
});

// Export router
module.exports = router;
