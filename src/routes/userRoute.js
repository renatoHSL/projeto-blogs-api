const express = require('express');
const { userController } = require('../controllers');
const { newUser } = require('../middlewares/newUser');
const { tokenVal } = require('../middlewares/tokenValidation');

const routerUser = express.Router();

routerUser.post('/', newUser, userController.insertNewUser);
routerUser.get('/', tokenVal, userController.getUsers);

module.exports = routerUser;