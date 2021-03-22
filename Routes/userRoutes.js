const {Router} = require("express")
const userController = require("../Controller/userController")
const router = Router()

router.get('/home', userController.homeController)

module.exports = router