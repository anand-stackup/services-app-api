const mongoose = require('mongoose')

var schema = new mongoose.Schema({
    categoryName: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Categories', schema)