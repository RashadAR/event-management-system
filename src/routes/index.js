const express = require('express');
const router = express.Router();
const mysqlPool = require('../db');

router.get('/home', async (req, res) => {
    try {
        // Fetch upcoming events from the database
        const [events, fields] = await mysqlPool.query('SELECT * FROM events WHERE date > CURDATE()');

        // Render the home view with the fetched events
        res.render('home', { events });
    } catch (error) {
        console.error('Error fetching data from MySQL:', error);
        res.status(500).send('Internal Server Error');
    }
});

module.exports = router;
