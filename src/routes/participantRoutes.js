const express = require('express');
const router = express.Router();
const participantController = require('../controllers/participantController');

// Define routes for participants
router.post('/participants', participantController.registerParticipant);
router.get('/participants/:eventId', participantController.getParticipantsByEvent);

module.exports = router;
