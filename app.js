//imports
const express = require('express');
// const mongodb = require('mongodb');
const mongoose = require('mongoose');
const morgan = require('morgan');
const config = require('./utils/config');
// const helloRoute = require('./routes/helloRoute');
const taskRoute = require('./routes/taskRoute');
const categoryRoute = require('./routes/categoryRoute');

//app
const app = express();

app.use(express.json());

//logging
app.use(morgan('tiny'));

//routes
// app.use('/api/v1/hello', helloRoute);
app.use('/api/v1/task', taskRoute);
app.use('/api/v1/category', categoryRoute);

// app.get('/', function (req, res) {
//     res.json({ "hello": "world" });
// });


//config
// const client = mongodb.MongoClient;

// client.connect(config.DB, function (err, db) {
//     if (err) {
//         console.log('database is not connected')
//     }
//     else {
//         console.log('connected!!')
//     }
// });

mongoose.connect(config.DB)
    .then(() => console.log("connected to mongDB"))
    .catch(err => console.error("error connecting to mongoDB", err))

module.exports = app;