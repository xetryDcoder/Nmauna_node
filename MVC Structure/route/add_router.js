const express = require('express')
const router = express.Router()

//controller calling
const addController = require('./../controller/add_controller')

//Creating route
router.get('/add', addController.getAdd )

router.post('/add', addController.postAdd )

module.exports = router