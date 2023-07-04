const express = require('express');
const app = express.Router()
const categoryController = require("../controllers/category.controller")


app.get("/", categoryController.getAll)
  

module.exports = app