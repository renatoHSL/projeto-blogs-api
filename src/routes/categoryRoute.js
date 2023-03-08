const express = require('express');
const { validateToken } = require('../auth/validateJWT');
const { categoryController } = require('../controllers');

console.log(categoryController);
const routeCategory = express.Router();

routeCategory.post('/', validateToken, categoryController.createCategory);

module.exports = routeCategory;