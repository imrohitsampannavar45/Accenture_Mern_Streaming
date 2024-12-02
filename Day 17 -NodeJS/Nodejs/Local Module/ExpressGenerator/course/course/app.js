const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');


const app = express();

require('./db/dbconnection');


app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));


const port = 4000;
app.set('port', port);


app.use(express.static(path.join(__dirname, 'public')));

const courseRoutes = require('./routes/courseRoutes');
app.use('/courses', courseRoutes);


app.get('/', (req, res) => {
  res.send('Welcome to the Course Application!');
});

app.listen(app.get('port'), () => {
  console.log(`Server running on port ${app.get('port')}`);
});

module.exports = app;
