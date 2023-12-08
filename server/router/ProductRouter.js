const express = require('express')
const router = express.Router()
const controller = require('../controller/productController')

router.post('/api/products', controller.create)
router.get('/api/products', controller.find)

module.exports = router;