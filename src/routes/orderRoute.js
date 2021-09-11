const express = require("express")
const router = express.Router()
const orderController = require('../controllers/orderController')

// order
router.post('/orders/placeorder', orderController.createOrder)
router.post('/orders/getuserorders', orderController.getUserAllOrders)
router.get('/orders/getallorders', orderController.getAllOrders)
router.post('/orders/deliverorder', orderController.deliverOrder)

module.exports = router
