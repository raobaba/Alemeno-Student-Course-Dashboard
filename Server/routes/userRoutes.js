const express = require('express');
const userRouter = express.Router();
const { signupUser, loginUser, logoutUser } = require('../controllers/UserController.js');

userRouter.post('/user/signup', signupUser);
userRouter.post('/user/login', loginUser);
userRouter.post('/user/logout',logoutUser)

module.exports = userRouter;

