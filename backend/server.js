// server.js

require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
const ejs = require('ejs')
const bodyParser = require('body-parser')
const bookRoutes = require('./routes/bookRoutes');
const userRoutes = require('./routes/userRoutes')

// Express app
const app = express()

// Middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true })); // Parse form data
app.use(bodyParser.json()); // Parse JSON data
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    // Pass an empty user object if not available
    res.locals.user = req.user || {};
    next();
});

app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')

// Routes
app.get('/', (req, res) => {
    res.render('home');
});

app.use('/api/books', bookRoutes)
app.use('/api/user', userRoutes)



// Connect to database
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'my_library'
})
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log('Connected to database. \nListening on port', process.env.PORT)
        });

    })
    .catch((err) => {
        console.log(err)
    })

