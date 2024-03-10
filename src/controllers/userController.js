const User = require('../models/userModel');

const UserController = {
    register: async (req, res) => {
        const { username, email, password } = req.body;

        try {
            const result = await User.register(username, email, password);
            res.status(201).json(result);
        } catch (error) {
            console.error('Error registering user:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    },

    login: async (req, res) => {
        const { username, password } = req.body;

        try {
            const result = await User.login(username, password);
            res.status(200).json(result);
        } catch (error) {
            console.error('Error during login:', error);
            res.status(401).json({ error: 'Invalid credentials' });
        }
    },
};

module.exports = UserController;
