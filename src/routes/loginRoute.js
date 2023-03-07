const express = require('express');
const { loginController } = require('../controllers');

const routerLogin = express.Router();

routerLogin.post('/', loginController);

module.exports = routerLogin;