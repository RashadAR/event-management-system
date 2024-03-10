const Ticket = require('../models/ticketModel');

const TicketController = {
    purchaseTicket: async (req, res) => {
        const { event_id, user_id, price } = req.body;

        try {
            const result = await Ticket.purchaseTicket(event_id, user_id, price);
            res.status(201).json(result);
        } catch (error) {
            console.error('Error purchasing ticket:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    },

    getTickets: async (req, res) => {
        try {
            const tickets = await Ticket.getTickets();
            res.status(200).json(tickets);
        } catch (error) {
            console.error('Error fetching tickets:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    },
};

module.exports = TicketController;
