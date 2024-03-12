const db = require('../db');

const createOrganizer = async (organizerData) => {
    try {
        // Assuming organizerData contains the necessary information for the new organizer
        const { name, email } = organizerData;

        // Insert a new organizer into the 'organizers' table
        const [result] = await db.query('INSERT INTO organizers (name, email) VALUES (?, ?)', [name, email]);

        // Return the newly inserted organizer ID or any relevant information
        return { organizerId: result.insertId }; // Adjust as needed
    } catch (error) {
        // Handle errors, log, or throw as needed
        console.error('Error creating organizer:', error);
        throw error;
    }
};

const getOrganizerById = async (organizerId) => {
    try {
        // Retrieve organizer details by ID from the 'organizers' table
        const [rows] = await db.query('SELECT * FROM organizers WHERE id = ?', [organizerId]);

        // Check if the organizer with the given ID exists
        if (rows.length === 0) {
            // You may choose to throw an error or return a specific response for not found
            throw new Error('Organizer not found');
        }

        // Return the organizer details
        return rows[0];
    } catch (error) {
        // Handle errors, log, or throw as needed
        console.error('Error getting organizer by ID:', error);
        throw error;
    }
};

module.exports = { createOrganizer, getOrganizerById };
