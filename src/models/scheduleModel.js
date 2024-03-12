const db = require('../db');

const createSchedule = async (scheduleData) => {
    try {
        // Assuming scheduleData contains the necessary information for the new schedule
        const { eventId, startTime, endTime, dayOfWeek } = scheduleData;

        // Insert a new schedule into the 'schedules' table
        await db.query('INSERT INTO schedules (event_id, start_time, end_time, day_of_week) VALUES (?, ?, ?, ?)', [eventId, startTime, endTime, dayOfWeek]);

        // You can return a success message or any relevant information
        return { message: 'Schedule created successfully' };
    } catch (error) {
        // Handle errors, log, or throw as needed
        console.error('Error creating schedule:', error);
        throw error;
    }
};

const getScheduleByEventId = async (eventId) => {
    try {
        // Retrieve the schedule for a specific event from the 'schedules' table
        const [rows] = await db.query('SELECT * FROM schedules WHERE event_id = ?', [eventId]);

        // Return the schedule for the given event
        return rows;
    } catch (error) {
        // Handle errors, log, or throw as needed
        console.error('Error getting schedule by event ID:', error);
        throw error;
    }
};

module.exports = { createSchedule, getScheduleByEventId };
