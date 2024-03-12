const db = require('../db');

const createVenue = async (venueData) => {
    try {
        // Assuming venueData contains the necessary information for the new venue
        const { name, location } = venueData;

        // Insert a new venue into the 'venues' table
        await db.query('INSERT INTO venues (name, location) VALUES (?, ?)', [name, location]);

        // You can return a success message or any relevant information
        return { message: 'Venue created successfully' };
    } catch (error) {
        // Handle errors, log, or throw as needed
        console.error('Error creating venue:', error);
        throw error;
    }
};

const getAllVenues = async () => {
    try {
        // Retrieve all venues from the 'venues' table
        const [rows] = await db.query('SELECT * FROM venues');

        // Return the list of venues
        return rows;
    } catch (error) {
        // Handle errors, log, or throw as needed
        console.error('Error getting all venues:', error);
        throw error;
    }
};

module.exports = { createVenue, getAllVenues };
