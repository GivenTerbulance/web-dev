const mongoose = require('mongoose');

// Define schema for projects
const projectSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    dateCreated: { type: Date, default: Date.now }
});

// Create model for Project
const Project = mongoose.model('Project', projectSchema);

module.exports = Project;
