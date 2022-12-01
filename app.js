// Import express library (entry point)
const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path');

// Database
const db = require('./database/db')

// Test DB
db.authenticate()
    .then(() => console.log('Database connected...'))
    .catch(err => console.log('Error: ' + err))

const app = express();

app.get('/', (req, res) => res.send('INDEX'));

// Employee routes
app.use('/employees', require('./routes/employees'))

// Task routes
app.use('/tasks', require('./routes/tasks'))

const PORT = process.env.PORT || 5001;

app.listen(PORT, console.log(`Server started on ${PORT}`));