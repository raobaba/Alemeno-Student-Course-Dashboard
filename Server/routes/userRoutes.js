const express = require('express');
const userRouter = express.Router();
const { signupUser, loginUser } = require('../controllers/UserController.js');

userRouter.post('/user/signup', signupUser);
userRouter.post('/user/login', loginUser);

module.exports = userRouter;

