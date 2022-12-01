const express = require('express');
const router = express.Router();
const db = require('../database/db')
const Task = require('../database/models/Task');

router.get('/', (req, res) =>
    Task.findAll()
        .then(tasks => {
            console.log(tasks);
            res.sendStatus(200);
        })
        .catch(err => console.log(err)));

module.exports = router