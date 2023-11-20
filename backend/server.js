// server.js

require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
const bookRoutes = require('./routes/bookRoutes');

// Express app
const app = express()

// Middleware
app.use(cors());
app.use(express.json())
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// Routes
app.use('/api/books', bookRoutes)

// Connect to database
mongoose.connect(process.env.MONGO_URI, {
    useNewURLParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log('Connected to database. \nListening on port', process.env.PORT)
        });

    })
    .catch((err) => {
        console.log(err)
    })

