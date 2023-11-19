const Book = require('../models/bookModel');
const mongoose = require('mongoose');

// Get all books
const getBooks = async (req, res) => {
    const books = await Book.find({}).sort({ category: 1, title: 1 });

    res.status(200).json(books)
}

//Get single book
const getBook = async (req, res) => {
    const { isbn } = req.params

    // if(!mongoose.Types.ObjectId.isValid(isbn)){
    //     return res.status(404).json({error: "No such book"})
    // }

    const book = await Book.findOne({ isbn: isbn });

    if(null) {
        return res.status(400).json({error: "No such book"})
    }
    res.status(200).json(book)
}

// Add new book
const addBook = async (req, res) => {
    
    const { title, author, isbn, category, pages, pub_date, ori_date, blurb, genres } = req.body
    
    try {
        const book = await Book.create({title, author, isbn, category, pages, pub_date, ori_date, blurb, genres})
        res.status(200).json(book)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
    
}

// Delete a book

// Update a book


module.exports = {
    getBooks,
    getBook,
    addBook
}