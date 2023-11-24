// routes/bookRoutes.js

const express = require('express');
const {
    getBooks,
    getBook,
    addBook,
    searchBook,
    updateBook,
    deleteBook
} = require("../controllers/bookController")
const requireAuth = require('../middleware/requireAuth')

const router = express.Router();

// Require auth for all book routes
router.use(requireAuth)

// GET all books
router.get('/', getBooks)

// GET one book in library
router.get('/:isbn', getBook)

// GET one book from database or Google Books
router.get('/search/:isbn', searchBook)

// POST new book
router.post('/', addBook)

// UPDATE book
router.patch('/:isbn', updateBook)

// DELETE book
router.delete('/:isbn', deleteBook)

module.exports = router
