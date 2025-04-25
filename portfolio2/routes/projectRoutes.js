const express = require('express');
const Project = require('../models/project');
const router = express.Router();

// Route to get all projects from MongoDB
router.get('/', (req, res) => {
    Project.find({}, (err, projects) => {
        if (err) {
            return res.status(500).send("Error fetching projects from MongoDB");
        }
        res.json(projects);
    });
});

module.exports = router;
