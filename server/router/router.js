const express = require('express')
const router = express.Router()
const controller = require('../controller/controller')

router.post('/api/categories', controller.create)
router.get('/api/categories', controller.find)
router.put('/api/categories/:id', controller.update)
router.delete('/api/categories/:id', controller.delete)

module.exports = router;