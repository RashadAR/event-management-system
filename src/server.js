// server.js
const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const mysqlPool = require('./db');
const ejs = require('ejs');
const bcrypt = require('bcrypt');
const path = require('path');
const router = express.Router();
require('dotenv').config();

const eventRoutes = require('./routes/eventRoutes');
const organizerRoutes = require('./routes/organizerRoutes');
const participantRoutes = require('./routes/participantRoutes');
const venueRoutes = require('./routes/venueRoutes');
const scheduleRoutes = require('./routes/scheduleRoutes');
const userRoutes = require('./routes/userRoutes');
const ticketRoutes = require('./routes/ticketRoutes');



const app = express();
const PORT = process.env.PORT || 3000;

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({ secret: 'secret', resave: true, saveUninitialized: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get("/", (req, res) => {
    res.render("landing.ejs")
})
app.use('/events', eventRoutes);
app.use('/organizers', organizerRoutes);
app.use('/participants', participantRoutes);
app.use('/venues', venueRoutes);
app.use('/schedules', scheduleRoutes);
app.use('/users', userRoutes);
app.use('/tickets', ticketRoutes);

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
