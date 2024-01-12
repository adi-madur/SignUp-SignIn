require('dotenv').config();
const express = require('express');
const connectToDb = require('./config/db.js')
const app = express();
const cors = require('cors');
const userRoutes = require('./routes/userRoutes.js');

// Connection to Database // Before using any middlewares or routes
connectToDb();

// Express Middlewares
app.use(express.json()); // --> Accept data as json
app.use(express.urlencoded({extended: true})) //--> Since password is sent through URL, it should be encoded
app.use(cors()); // --> for cross origin requesting services


app.use('/', userRoutes);

module.exports = app;