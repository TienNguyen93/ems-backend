// Instantiate database

// Module dependencies
const Sequelize = require('sequelize')

// Connection to Database (entry point)
const db = new Sequelize('ems-backend', 'postgres', 'ht2077', {
    host: 'localhost',
    dialect: 'postgres'
});

// Exports Sequelize
module.exports = db;