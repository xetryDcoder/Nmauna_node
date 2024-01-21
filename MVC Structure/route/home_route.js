const express = require('express')
const router = express.Router()

const app = express()

//calling controller
const homeController = require('./../controller/home_controller')

router.get('/', homeController.getHome)


module.exports = router