const organizerModel = require('../models/organizerModel');

exports.createOrganizer = async (req, res) => {
    const organizerData = req.body;
    try {
        const newOrganizer = await organizerModel.createOrganizer(organizerData);
        res.json(newOrganizer);
    } catch (error) {
        console.error('Error creating organizer:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

exports.getOrganizerById = async (req, res) => {
    const organizerId = req.params.organizerId;
    try {
        const organizer = await organizerModel.getOrganizerById(organizerId);
        if (organizer) {
            res.json(organizer);
        } else {
            res.status(404).json({ error: 'Organizer not found' });
        }
    } catch (error) {
        console.error('Error fetching organizer by ID:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
