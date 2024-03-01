const mysql = require('mysql2/promise');

const pool = mysql.createPool({
    host: 'localhost',
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "prashu",
    database: process.env.DB_DATABASE || "event_management_db",
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

module.exports = pool;
