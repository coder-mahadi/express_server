// Require
const express = require("express")
const router = express.Router()

//Controllers
const {
  products
} = require("../controllers/products")

router.get("/products", products)

// Module Exports
module.exports = router