const express = require('express');
const router = express.Router();
const eventController = require('../controllers/eventController');

// Define routes for events
router.get('/events', eventController.getAllEvents);
router.get('/events/:eventId', eventController.getEventById);
router.post('/events', eventController.createEvent);
router.put('/events/:eventId', eventController.updateEvent);
router.delete('/events/:eventId', eventController.deleteEvent);

module.exports = router;
