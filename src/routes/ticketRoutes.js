const express = require('express');
const router = express.Router();
const ticketController = require('../controllers/ticketController');

// Purchase a ticket
router.post('/purchase', ticketController.purchaseTicket);

// Get all tickets
router.get('/', ticketController.getTickets);

module.exports = router;
