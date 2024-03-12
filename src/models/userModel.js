const mysql = require('mysql2/promise');
const bcrypt = require('bcrypt');


const User = {
    register: async (username, email, password) => {
        const connection = await mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'Mroot@123',
            database: 'event_management_db',
        });

        try {
            const hashedPassword = await bcrypt.hash(password, 10);
            const [result] = await connection.execute('INSERT INTO users (username, email, password) VALUES (?, ?, ?)', [username, email, hashedPassword]);

            // After successful registration, return the user_id
            return { userId: result.insertId, message: 'User registered successfully' };
        } catch (error) {
            console.error('Error registering user:', error);
            throw error;
        } finally {
            connection.end();
        }
    },

    // User login
    login: async (username, password) => {
        const connection = await mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'Mroot@123',
            database: 'event_management_db',
        });

        try {
            const [rows] = await connection.execute('SELECT * FROM users WHERE username = ?', [username]);
            if (rows.length === 0) {
                throw new Error('User not found');
            }

            const user = rows[0];
            const isPasswordValid = await bcrypt.compare(password, user.password);
            if (!isPasswordValid) {
                throw new Error('Invalid password');
            }

            // Implement login logic here, e.g., generate a token
        } catch (error) {
            console.error('Error during login:', error);
            throw error;
        } finally {
            connection.end();
        }
    },
};

module.exports = User;
