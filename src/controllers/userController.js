// userController.js
const User = require('../models/userModel');

const UserController = {

    login: async (req, res) => {
        res.render('login.ejs');
    },

    handleLogin: async (req, res) => {
        const { username, password } = req.body;

        try {
            // Validate user credentials (use your User model logic)
            const result = await User.login(username, password);

            // Redirect to the home page or another page on successful login
            res.redirect('/home');
        } catch (error) {
            console.error('Error during login:', error);
            res.status(401).json({ error: 'Invalid credentials' });
        }
    },

    register: async (req, res) => {
        res.render('register.ejs');
    },

    handleRegister: async (req, res) => {
        const { username, email, password } = req.body;

        try {
            // Register a new user (use your User model logic)
            const result = await User.register(username, email, password);

            // Redirect to the home page or another page on successful signup
            res.redirect('/home');
        } catch (error) {
            console.error('Error registering user:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    },
};

module.exports = UserController;
