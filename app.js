//imports
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const config = require('./utils/config');
const taskRoute = require('./routes/taskRoute');
const categoryRoute = require('./routes/categoryRoute');

//app
const app = express();

app.use(express.json());

//logging
app.use(morgan('tiny'));

app.use('/api/v1/task', taskRoute);
app.use('/api/v1/category', categoryRoute);

mongoose.connect(config.DB)
    .then(() => console.log("connected to mongDB"))
    .catch(err => console.error("error connecting to mongoDB", err))

module.exports = app;