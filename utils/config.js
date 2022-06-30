require('dotenv').config();

const DB = process.env.MONGO_URI;

const PORT = 3040;

module.exports = { DB, PORT };