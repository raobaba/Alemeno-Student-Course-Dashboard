const express = require("express");
const enrollRouter = express.Router();
const checkLoggedIn = require('../middlewares/authenticationMiddleware');
const { enrollStudentInCourse, getEnrolledCourses } = require("../controllers/EnrollmentController.js");

// Enroll a student in a course
enrollRouter.post("/courses/:courseId/enroll",checkLoggedIn,  enrollStudentInCourse);
enrollRouter.get("/students/:studentId/courses",checkLoggedIn,  getEnrolledCourses);

module.exports = enrollRouter;
