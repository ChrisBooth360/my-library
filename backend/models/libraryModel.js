// models/libraryModel.js

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const librarySchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  bookId: {
    type: Schema.Types.ObjectId,
    ref: 'Book',
    required: true
  },
  status: {
    type: String,
    enum: ['unread', 'read', 'currentlyReading'],
    required: true
  },
  progress: {
    pages: {
      type: Number,
      default: 0
    },
    percentage: {
      type: Number,
      default: 0
    }
  },
  rating: {
    type: Number
  }
}, { timestamps: true });

module.exports = mongoose.model('Library', librarySchema);
