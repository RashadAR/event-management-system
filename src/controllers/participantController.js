const participantModel = require('../models/participantModel');

exports.registerParticipant = async (req, res) => {
    const participantData = req.body;
    try {
        const newParticipant = await participantModel.registerParticipant(participantData);
        res.json(newParticipant);
    } catch (error) {
        console.error('Error registering participant:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

exports.getParticipantsByEvent = async (req, res) => {
    const eventId = req.params.eventId;
    try {
        const participants = await participantModel.getParticipantsByEventId(eventId);
        res.json(participants);
    } catch (error) {
        console.error('Error fetching participants by event ID:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
