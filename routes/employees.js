const express = require('express');
const router = express.Router();
const { Task, Employee } = require('../database/models');

// helper function so we don't need to wrap our
// handler functions in try-catch blocks;
// the async handler will catch any errors and pass
// them to the error-handling middleware (defined in app.js)
const ash = require('express-async-handler');

/** GET ALL EMPLOYEES */
router.get('/', ash(async(req, res) => {
  let employees = await Employee.findAll({include: [Task]});
  res.status(200).json(employees);
}));

module.exports = router