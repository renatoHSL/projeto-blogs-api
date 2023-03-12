const express = require('express');

const { postController } = require('../controllers');
const { tokenValidation } = require('../middlewares');

const routerPost = express.Router();

routerPost.get('/', tokenValidation, postController.getPost);

module.exports = routerPost;