const express = require('express')
const router = express.Router()

//accesing controller file
const aboutController = require('./../controller/about_controller')

//Creating Path
router.get('/about', aboutController.getAbout)

module.exports = router