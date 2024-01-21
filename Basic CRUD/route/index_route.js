const express = require('express')
const router = express.Router()

const app = express()

//controller calling
const indeController = require("./../controller/index_controller")

//Route Set
router.get('/', indeController.getIndex)

module.exports = router