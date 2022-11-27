// Package Require 
const http = require("http")
const {
  readdirSync
} = require("fs")
const url = require("url")
const express = require('express')
const app = express()
const cors = require('cors')
const expressJwt = require('express-jwt')
const helmet = require('helmet')
const jsonwebtoken = require('jsonwebtoken')
const mongoose = require('mongoose')
const morgan = require('morgan')
const multer = require('multer')
const validatorjs = require('validatorjs')
require("dotenv").config()

// Middleware use
app.use(helmet())
app.use(express.static("public"))
app.use(express.json())
app.use(express.urlencoded({
  extended: false
}))
app.use(morgan("dev"))
app.use(cors())

// MongoDB Connection By mongoose
mongoose
  .connect(process.env.DATABASE)
  .then(() => console.log("Database connected"))
  .catch((err) => console.log(err))

// Server Listen
const port = process.env.PORT || 8000
app.listen(port, () => {
  console.log(`Server is Running....port${port}`)
})





/* 
app.get("/", (req, res) => {
  res.send("Ok")
})

app.listen(8000, () => {
  console.log(`Server is Running...port:`)
}) */