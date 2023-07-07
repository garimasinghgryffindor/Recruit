const mongoose = require('mongoose');

const candidatesTemplate = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Candidate' , candidatesTemplate);