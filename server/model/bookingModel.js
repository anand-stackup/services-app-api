const mongoose = require('mongoose')

var schema = new mongoose.Schema({
    date: {
        type: String,
        required: true
    },
    slot: {
        type: String,
        required: true
    },
    productName: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
})

module.exports = mongoose.model('Booking', schema)