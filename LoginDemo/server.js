'use strict'

const express = require("express")

const PORT = 9005

const app = express()

app.use(express.static('public'))

app.listen(PORT)

console.log("Server started at http://localhost:9005")

