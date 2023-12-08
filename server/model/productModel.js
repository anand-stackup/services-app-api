const mongoose = require('mongoose')

var schema = new mongoose.Schema({
    categoryId: {
        type: String,
        required: true
    },
    imgurl: {
        type: String,
        required: true
    },
    productName: {
        type: String,
        required: true
    },
    productDesc: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
})

module.exports = mongoose.model('Products', schema)