const express = require('express');
const mongoose = require('mongoose');
const mysql = require('mysql2');
const path = require('path');
const projectRoutes = require('./routes/projectRoutes');

// Create Express app
const app = express();

// Set up middleware for JSON parsing
app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/your-db', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connected to MongoDB"))
    .catch(err => console.error("Error connecting to MongoDB", err));

// MySQL connection
const mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'your-db-user',
    password: 'P@$$W0Rd',
    database: 'portfolio'
});

mysqlConnection.connect(err => {
    if (err) {
        console.error("Error connecting to MySQL:", err);
    } else {
        console.log("Connected to MySQL");
    }
});

// Use routes
app.use('/projects', projectRoutes);

// Serve static files (if needed)
app.use(express.static(path.join(__dirname, 'public')));

// Set up a simple route for testing
app.get('/', (req, res) => {
    res.send("Welcome to the Portfolio Backend!");
});

// Listen on a port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
