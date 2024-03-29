// routes/userRoutes.js

const express = require('express')

// Controller functions
const { loginUser, signupUser, logoutUser, renderHome } = require('../controllers/userController')
const requireAuth = require('../middleware/requireAuth')
const { route } = require('./bookRoutes')

const router = express.Router()

// Home route
router.get('/', requireAuth, async (req, res) => {
    try {
        // Call renderHome function and pass the user variable
        renderHome(req, res);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Signup route
router.get('/signup', (req, res) => {
    res.render('signup', {error: null})  // Renders the signup.ejs view
})

router.post('/signup', async (req, res) => {
    try {
        console.log('Signup Request Body:', req.body);
        await signupUser(req, res);
        // After successful signup, respond with a success message or status
        console.log({ success: true, message: 'Signup successful' });
    } catch (error) {
        res.status(400).render('signup', { error: error.message }); // Render signup page with error message
    }
});

// Login route
router.get('/login', (req, res) => {
    res.render('login', {error: null})  // Renders the login.ejs view
})

router.post('/login', async (req, res) => {
    try {
        console.log('Login Request Body:', req.body);
        await loginUser(req, res);

        // After successful login, respond with a success message or status
        console.log({ success: true, message: 'Login successful' });
        
    } catch (error) {
        res.status(400).render('login', { error: error.message }); // Render login page with error message
    }
});

// Logout route
router.get('/logout', requireAuth, logoutUser);

module.exports = router