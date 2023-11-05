// routes/userRoutes.js
const express = require('express');
const userRouter = express.Router();
const { signupStudent, loginStudent, logoutStudent } = require('../controllers/UserController.js');

userRouter.post('/student/signup', signupStudent);
userRouter.post('/student/login', loginStudent);
userRouter.post('/student/logout', logoutStudent);

module.exports = userRouter;

