// controllers/userController.js

const User = require('../models/userModel')
const jwt = require('jsonwebtoken')

const createToken = (_id) => {
    return jwt.sign({_id}, process.env.SECRET, { expiresIn: '3d' })
}

// Login user
const loginUser = async (req, res) => {
    const { email, password } = req.body

    try{
        const user = await User.login(email, password)

        // Create a token
        const token = createToken(user._id)

        // Send the token as a cookie
        res.cookie('jwt', token, { httpOnly: true, maxAge: 3 * 24 * 60 * 60 * 1000 }); // 3 days

        req.user = { _id: user._id, firstName: user.firstName, email: user.email }; // Set user in the request object

        res.redirect('/');
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

// Signup user
const signupUser = async (req, res) => {
    const { email, password, firstName, lastName } = req.body

    try{
        const user = await User.signup(email, password, firstName, lastName)

        // Create a token
        const token = createToken(user._id)

        // Decode the token to get user information
        const decodedToken = jwt.verify(token, process.env.SECRET)

        // Store the token in a cookie or local storage
        res.cookie('jwt', token, { httpOnly: true, maxAge: 3 * 24 * 60 * 60 * 1000 }); // Example using a cookie

        req.user = { _id: user._id };
        res.redirect('/');
    } catch(error){
        res.status(400).json({error: error.message})
    }
}

// Render the home page
const renderHome = async (req, res) => {
    try {
        const user_id = req.user ? req.user._id : null;

        if (user_id) {
            let user = await User.findById(user_id).select('firstName');
            console.log("Logged-in User Information:", user);
            res.render('my-library', { user });
        } else {
            console.log("User is not logged in.");
            res.render('my-library', { user: null });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

// Logout user
const logoutUser = (req, res) => {
    // Clear user information from req
    req.user = null;
    res.clearCookie('jwt')
    res.redirect('/'); // Redirect to login page after logout
};

module.exports = { loginUser, signupUser, logoutUser, renderHome }