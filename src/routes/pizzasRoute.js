const express = require("express")
const router = express.Router()
const pizzasController = require('../controllers/pizzasController')

// pizzas
router.get('/pizzas/getallpizzas', pizzasController.index)
router.post('/pizzas/getpizzabyid', pizzasController.show)
router.post('/pizzas/addpizza', pizzasController.store)
router.post('/pizzas/editpizza', pizzasController.update)
router.post('/pizzas/deletepizza', pizzasController.delete)

module.exports = router