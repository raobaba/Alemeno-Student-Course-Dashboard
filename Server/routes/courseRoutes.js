// routes/courseRoutes.js

const express = require('express');
const courseRouter = express.Router();
const CourseController = require('../controllers/CourseController');

//post data
courseRouter.post('/courses', CourseController.createCourse);

// Retrieve a list of courses
courseRouter.get('/courses', CourseController.getCourses);

// Retrieve details of a specific course
courseRouter.get('/courses/:courseId', CourseController.getCourseDetails);

// Define routes for other course-related actions (e.g., create, update, delete).

module.exports = courseRouter;
