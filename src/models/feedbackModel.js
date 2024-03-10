const mysql = require('mysql2/promise');

const Feedback = {
    submitFeedback: async (event_id, user_id, feedback_text, rating) => {
        const connection = await mysql.createConnection({
            host: 'localhost',
            user: 'your_username',
            password: 'your_password',
            database: 'event_management_db',
        });

        try {
            await connection.execute('INSERT INTO feedback (event_id, user_id, feedback_text, rating) VALUES (?, ?, ?, ?)', [event_id, user_id, feedback_text, rating]);
            return { message: 'Feedback submitted successfully' };
        } catch (error) {
            console.error('Error submitting feedback:', error);
            throw error;
        } finally {
            connection.end();
        }
    },

    getFeedback: async () => {
        const connection = await mysql.createConnection({
            host: 'localhost',
            user: 'your_username',
            password: 'your_password',
            database: 'event_management_db',
        });

        try {
            const [rows] = await connection.execute('SELECT * FROM feedback');
            return rows;
        } catch (error) {
            console.error('Error fetching feedback:', error);
            throw error;
        } finally {
            connection.end();
        }
    },
};

module.exports = Feedback;
