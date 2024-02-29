const eventModel = require('../models/eventModel');

exports.getAllEvents = async (req, res) => {
    try {
        const events = await eventModel.getAllEvents();
        res.json(events);
    } catch (error) {
        console.error('Error fetching events:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

exports.getEventById = async (req, res) => {
    const eventId = req.params.eventId;
    try {
        const event = await eventModel.getEventById(eventId);
        if (event) {
            res.json(event);
        } else {
            res.status(404).json({ error: 'Event not found' });
        }
    } catch (error) {
        console.error('Error fetching event by ID:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

exports.createEvent = async (req, res) => {
    const eventData = req.body;
    try {
        const newEvent = await eventModel.createEvent(eventData);
        res.json(newEvent);
    } catch (error) {
        console.error('Error creating event:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

exports.updateEvent = async (req, res) => {
    const eventId = req.params.eventId;
    const eventData = req.body;
    try {
        const updatedEvent = await eventModel.updateEvent(eventId, eventData);
        if (updatedEvent) {
            res.json(updatedEvent);
        } else {
            res.status(404).json({ error: 'Event not found' });
        }
    } catch (error) {
        console.error('Error updating event:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

exports.deleteEvent = async (req, res) => {
    const eventId = req.params.eventId;
    try {
        const result = await eventModel.deleteEvent(eventId);
        if (result) {
            res.json({ message: 'Event deleted successfully' });
        } else {
            res.status(404).json({ error: 'Event not found' });
        }
    } catch (error) {
        console.error('Error deleting event:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
