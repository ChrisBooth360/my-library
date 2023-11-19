const express = require('express');
const {
    getBooks,
    getBook,
    addBook
} = require("../controllers/bookController")
const router = express.Router();


// GET all books
router.get('/', getBooks)

// GET one book
router.get('/:isbn', getBook)

// POST new book
router.post('/', addBook)

// UPDATE book
router.patch('/:isbn', (req, res) => {
    res.json({mssg: "UPDATE book"})
})

// DELETE book
router.delete('/:isbn', (req, res) => {
    res.json({mssg: "DELETE book"})
})

module.exports = router
