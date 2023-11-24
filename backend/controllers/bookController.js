// controllers/bookController.js
const Book = require('../models/bookModel');
const axios = require('axios');
const mongoose = require('mongoose');

// Get all books
const getBooks = async (req, res) => {
    const user_id = req.user._id
    
    const books = await Book.find({ user_id }).sort({ category: 1, title: 1 });

    res.status(200).json(books)
}

//Get single book
const getBook = async (req, res) => {
    const { isbn } = req.params

    // if(!mongoose.Types.ObjectId.isValid(isbn)){
    //     return res.status(404).json({error: "No such book"})
    // }

    const book = await Book.findOne({ isbn: isbn });

    if (book === null) {
        return res.status(400).json({ error: "No such book in your library." })
    }
    res.status(200).json(book)
}

// Search single book in DB or Google Books
const searchBook = async (req, res) => {
    const { isbn } = req.params;

    const book = await Book.findOne({ isbn: isbn });

    // If the book is not in the database.
    if (book === null) {

        const GOOGLE_BOOKS_API_KEY = process.env.GB_API_KEY;

        try {
            const apiUrl = `https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}&key=${GOOGLE_BOOKS_API_KEY}`;
            const response = await axios.get(apiUrl);

            const bookData = response.data;
            // Handle the book data returned by the API
            return res.status(200).json({   
                isbn: isbn,
                title: bookData.items[0]?.volumeInfo?.title,
                author: bookData.items[0]?.volumeInfo?.authors[0],
                pages: bookData.items[0]?.volumeInfo.pageCount,
                curr_pub_date: bookData.items[0]?.volumeInfo.publishedDate,
                blurb: bookData.items[0]?.volumeInfo.description,
                genres: bookData.items[0]?.volumeInfo.categories,
                imageLink: bookData.items[0]?.volumeInfo.imageLinks.thumbnail
            });
        } catch (error) {
            // Handle errors
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }

    } else {
        res.status(200).json(book)
    }

    

}

// Add new book
const addBook = async (req, res) => {

    const { isbn, title, author, pages, curr_pub_date, blurb, genres, imageLink } = req.body

    try {
        const user_id = req.user._id
        const book = await Book.create({ isbn, title, author, pages, curr_pub_date, blurb, genres, imageLink, user_id })
        res.status(200).json(book)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }

}

// Delete a book
const deleteBook = async (req, res) => {
    const { isbn } = req.params
    
    const book = await Book.findOneAndDelete({isbn: isbn})

    if(!book) {
        return res.status(404).json({error: "No such book in database."})
    }
    res.status(200).json(book)
}

// Update a book
const updateBook = async (req, res) => {
    const { isbn } = req.params;

    try {
        const book = await Book.findOneAndUpdate({ isbn: isbn }, { ...req.body }, { new: true });

        if (!book) {
            return res.status(404).json({ error: "No such book" });
        }

        res.status(200).json(book);
    } catch (error) {
        // Handle any potential errors
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }

}

module.exports = {
    getBooks,
    getBook,
    addBook,
    searchBook,
    updateBook,
    deleteBook
}