const express = require('express');
const enrollRouter = express.Router();
const EnrollmentController = require('../controllers/EnrollmentController.js');

// Enroll a student in a course
enrollRouter.post('/courses/:courseId/enroll', EnrollmentController.enrollStudentInCourse);
enrollRouter.get('/students/:studentId/courses', EnrollmentController.getEnrolledCourses);

module.exports = enrollRouter;