const Sequelize = require('sequelize');
const db = require('../db');

const Task = db.define("task", {

  description: {
    type: Sequelize.STRING,
    allowNull: false
  },

  priority_level: {
    type: Sequelize.STRING,
    allowNull: false
  },

  completion_status: {
    type: Sequelize.STRING,
  }

});

module.exports = Task;