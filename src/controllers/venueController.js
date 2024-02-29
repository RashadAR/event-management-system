const venueModel = require('../models/venueModel');

exports.getAllVenues = async (req, res) => {
    try {
        const venues = await venueModel.getAllVenues();
        res.json(venues);
    } catch (error) {
        console.error('Error fetching venues:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

exports.createVenue = async (req, res) => {
    const venueData = req.body;
    try {
        const newVenue = await venueModel.createVenue(venueData);
        res.json(newVenue);
    } catch (error) {
        console.error('Error creating venue:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
