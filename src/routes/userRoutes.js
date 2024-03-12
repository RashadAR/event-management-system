// userRoutes.js
const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController');

// Register a new user
router.route('/register').get(UserController.register).post(UserController.handleRegister);

// User login
router.route('/login').get(UserController.login).post(UserController.handleLogin);

module.exports = router;
