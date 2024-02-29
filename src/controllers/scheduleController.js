const scheduleModel = require('../models/scheduleModel');

exports.createSchedule = async (req, res) => {
    const scheduleData = req.body;
    try {
        const newSchedule = await scheduleModel.createSchedule(scheduleData);
        res.json(newSchedule);
    } catch (error) {
        console.error('Error creating schedule:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

exports.getScheduleByEvent = async (req, res) => {
    const eventId = req.params.eventId;
    try {
        const schedule = await scheduleModel.getScheduleByEventId(eventId);
        res.json(schedule);
    } catch (error) {
        console.error('Error fetching schedule by event ID:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
