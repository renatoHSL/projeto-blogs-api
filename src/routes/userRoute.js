const express = require('express');

const { userController } = require('../controllers');
const { newUser, tokenValidation } = require('../middlewares');

const routerUser = express.Router();

routerUser.post('/', newUser, userController.insertNewUser);
routerUser.get('/', tokenValidation, userController.getUsers);

module.exports = routerUser;