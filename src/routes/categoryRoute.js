const express = require('express');
const { tokenValidation } = require('../middlewares');
const { categoryController } = require('../controllers');

// console.log(categoryController);
const routeCategory = express.Router();

routeCategory.post('/', tokenValidation, categoryController.createCategory);
routeCategory.get('/', tokenValidation, categoryController.getCategories);

module.exports = routeCategory;