const express = require('express')
const router = express.Router()
const controller = require('../controller/bookingController')

router.post('/api/booking', controller.create)
router.get('/api/booking', controller.find)
router.put('/api/booking/:id', controller.update)

module.exports = router;