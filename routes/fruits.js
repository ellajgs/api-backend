
const express = require("express")
const router = express.Router()
const fruits = require("../controllers/fruits")

router.get('/', fruits.index)

module.exports = router