const express = require('express');
const router = express.Router();
const organizerController = require('../controllers/organizerController');

// Define routes for organizers
router.post('/organizers', organizerController.createOrganizer);
router.get('/organizers/:organizerId', organizerController.getOrganizerById);

module.exports = router;
