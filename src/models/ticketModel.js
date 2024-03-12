const mysql = require('mysql2/promise');

const Ticket = {
    purchaseTicket: async (event_id, user_id, price) => {
        const connection = await mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'Mroot@123',
            database: 'event_management_db',
        });

        try {
            await connection.execute('INSERT INTO tickets (event_id, user_id, price) VALUES (?, ?, ?)', [event_id, user_id, price]);
            return { message: 'Ticket purchased successfully' };
        } catch (error) {
            console.error('Error purchasing ticket:', error);
            throw error;
        } finally {
            connection.end();
        }
    },

    getTickets: async () => {
        const connection = await mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'Mroot@123',
            database: 'event_management_db',
        });

        try {
            const [rows] = await connection.execute('SELECT * FROM tickets');
            return rows;
        } catch (error) {
            console.error('Error fetching tickets:', error);
            throw error;
        } finally {
            connection.end();
        }
    },
};

module.exports = Ticket;
