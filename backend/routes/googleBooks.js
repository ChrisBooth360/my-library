const express = require('express');
const router = express.Router();
const axios = require('axios');

const GOOGLE_BOOKS_API_KEY = process.env.GB_API_KEY;

console.log(GOOGLE_BOOKS_API_KEY)

router.get('/search/:isbn', async (req, res) => {
  const { isbn } = req.params;

  try {
    const apiUrl = `https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}&key=${GOOGLE_BOOKS_API_KEY}`;
    const response = await axios.get(apiUrl);

    const bookData = response.data;
    // Handle the book data returned by the API
    res.status(200).json(bookData);
  } catch (error) {
    // Handle errors
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
