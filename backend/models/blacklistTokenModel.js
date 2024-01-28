// models/blacklistTokenModel.js

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const blacklistTokenSchema = new Schema({
    token: {
        type: String,
        required: true,
        unique: true,
    },
});

module.exports = mongoose.model('BlacklistToken', blacklistTokenSchema);
