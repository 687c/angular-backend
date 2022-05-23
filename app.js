//imports
const express = require('express');
// const mongodb = require('mongodb');
const mongoose = require('mongoose');
const config = require('./utils/config');


//app
const app = express();

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

app.use(express.json());

app.get('/', function (req, res) {
    res.json({ "hello": "world" });
});


module.exports = app;