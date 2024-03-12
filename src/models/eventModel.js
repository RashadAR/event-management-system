const db = require('../db');

const createEvent = async (eventData) => {
    try {
        // Assuming eventData contains the necessary information for the new event
        const { name, date, venue_id, organizer_id } = eventData;

        // Insert a new event into the 'events' table
        const [result] = await db.query('INSERT INTO events (name, date, venue_id, organizer_id) VALUES (?, ?, ?, ?)', [name, date, venue_id, organizer_id]);

        // Return the newly inserted event ID or any relevant information
        return { eventId: result.insertId }; // Adjust as needed
    } catch (error) {
        // Handle errors, log, or throw as needed
        console.error('Error creating event:', error);
        throw error;
    }
};

const getEventById = async (eventId) => {
    try {
        // Retrieve event details by ID from the 'events' table
        const [rows] = await db.query('SELECT * FROM events WHERE id = ?', [eventId]);

        // Check if the event with the given ID exists
        if (rows.length === 0) {
            // You may choose to throw an error or return a specific response for not found
            throw new Error('Event not found');
        }

        // Return the event details
        return rows[0];
    } catch (error) {
        // Handle errors, log, or throw as needed
        console.error('Error getting event by ID:', error);
        throw error;
    }
};

module.exports = { createEvent, getEventById };
