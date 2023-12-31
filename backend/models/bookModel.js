// models/bookModel.js

const mongoose = require('mongoose');

const Schema = mongoose.Schema

const bookSchema = new Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    isbn: { type: String, required: true, unique: true },
    pages: { type: Number, required: true },
    curr_pub_date: { type: Date },
    ori_pub_date: { type: Date },
    blurb: { type: String },
    genres: { type: Array },
    image: {
        data: Buffer, // Binary data for the image
        contentType: String // MIME type of the image
    },
    user_id: {
        type: String,
        required: true
    }
}, { timestamps: true })

module.exports = mongoose.model('Book', bookSchema)