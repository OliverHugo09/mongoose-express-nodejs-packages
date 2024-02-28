require('dotenv').config();
const express = require('express')
const mongoose = require('mongoose')
const Package = require('./models/package.model')
const packageRoute = require('./routes/package.routes')
const app = express()

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }))

// routes
app.use("/api/v1/packages", packageRoute)

app.listen(process.env.APP_PORT, () => {
    console.log('Server is running on port 3000');
});

app.get('/', (req, res) => {
    res.send("Hello from Node API SERVER");
});

mongoose.connect(process.env.URL_CONNECT)
    .then(() => {
        console.log("Connected to database!");
    })
    .catch((e) => {
        console.log("Connection failed!" + e);
    })