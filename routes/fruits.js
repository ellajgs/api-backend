
const express = require("express")
const router = express.Router()
const fruits = require("../controllers/fruits")

router.get('/', fruits.index)
router.get('/:name', fruits.search)
router.post('/', fruits.create)

module.exports = router