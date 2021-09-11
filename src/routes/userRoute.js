const express = require("express")
const router = express.Router()
const userController = require('../controllers/userController')

// user
router.post('/user/register', userController.register)
router.post('/user/login', userController.login)
router.get('/user/getallusers', userController.getAllUser)
router.post('/user/deleteuser', userController.deleteUser)

module.exports = router