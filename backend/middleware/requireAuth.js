// middleware/requireAuth.js

const jwt = require('jsonwebtoken')
const User = require('../models/userModel')

const requireAuth = async (req, res, next) => {

    const token = req.cookies.jwt;

    // Skip authentication for specific routes
    if (!token && (req.path === '/' || req.path === '/api/user/login' || req.path === '/api/user/signup')) {
        return next();
    }

    if (!token) {
        return res.status(401).json({ error: "Authorization token required" });
    }

    try {
        const { _id } = jwt.verify(token, process.env.SECRET);
        const user = await User.findOne({ _id }).select('firstName email');
        req.user = user;
        next();
    } catch (error) {
        console.log(error);
        res.status(401).json({ error: "Request is not authorized" });
    }
}

module.exports = requireAuth