const express = require('express');
const router = express.Router();
const scheduleController = require('../controllers/scheduleController');

// Define routes for schedules
router.post('/schedules', scheduleController.createSchedule);
router.get('/schedules/:eventId', scheduleController.getScheduleByEvent);

module.exports = router;
