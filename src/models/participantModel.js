const db = require('../db');

const registerParticipant = async ({ eventId, userId, name, email }) => {
    try {
        // Check if the participant already exists
        const [existingParticipants] = await db.query('SELECT * FROM participants WHERE user_id = ? AND event_id = ?', [userId, eventId]);

        if (existingParticipants.length > 0) {
            // Participant already exists, handle the situation (update or other logic)
            // For now, let's throw an error
            throw new Error('Participant already registered for this event');
        }

        // Register a participant for an event in the 'participants' table
        await db.query('INSERT INTO participants (user_id, event_id, name, email) VALUES (?, ?, ?, ?)', [userId, eventId, name, email]);

        // You can return a success message or any relevant information
        return { message: 'Participant registered successfully' };
    } catch (error) {
        // Handle errors, log, or throw as needed
        console.error('Error registering participant:', error);
        throw error;
    }
};

const getParticipantsByEventId = async (eventId) => {
    try {
        // Retrieve participants for a specific event from the 'participants' table
        const [rows] = await db.query('SELECT * FROM participants WHERE event_id = ?', [eventId]);

        // Return the participants for the given event
        return rows;
    } catch (error) {
        // Handle errors, log, or throw as needed
        console.error('Error getting participants by event ID:', error);
        throw error;
    }
};

module.exports = { registerParticipant, getParticipantsByEventId };
