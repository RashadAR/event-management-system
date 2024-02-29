const express = require('express');
const router = express.Router();
const venueController = require('../controllers/venueController');

// Define routes for venues
router.get('/venues', venueController.getAllVenues);
router.post('/venues', venueController.createVenue);

module.exports = router;
