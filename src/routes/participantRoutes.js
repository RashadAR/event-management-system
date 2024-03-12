const express = require('express');
const router = express.Router();
const participantController = require('../controllers/participantController');
const User = require('../models/userModel');
const Participant = require('../models/participantModel');

router.post('/participants', async (req, res) => {
    try {
        // Assuming you have the user information from the registration form
        const userRegistrationResult = await User.register(req.body.username, req.body.email, req.body.password);

        // Assuming 'userRegistrationResult' contains the 'userId' for the registered user
        const userId = userRegistrationResult.userId;

        // Register a participant
        const participantRegistrationResult = await Participant.registerParticipant({
            eventId: req.body.eventId, // Assuming you get the eventId from the request body
            userId: userId,
            name: req.body.name, // Assuming you get the participant name from the request body
            email: req.body.email, // Assuming you get the participant email from the request body
        });

        console.log('Participant registered:', participantRegistrationResult);

        // Return a success response or redirect to a success page
        res.status(200).json({ message: 'Registration successful' });
    } catch (error) {
        console.error('Error registering participant:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;
