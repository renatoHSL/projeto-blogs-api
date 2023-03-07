const express = require('express');
const { userController } = require('../controllers');
const { newUser } = require('../middlewares/newUser');

const routerUser = express.Router();

routerUser.post('/', newUser, userController.insertNewUser);

module.exports = routerUser;