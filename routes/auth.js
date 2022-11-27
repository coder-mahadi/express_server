// File Require(Default)
const express = require("express")
const router = express.Router()

// Controllers
const {
  resServer
} = require("../controllers/auth")

//Routes
router.get("/home", resServer)

// Router Exports(Default)
module.exports = router