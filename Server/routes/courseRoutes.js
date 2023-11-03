const express = require('express');
const courseRouter = express.Router();
const CourseController = require('../controllers/CourseController');
const {checkLoggedIn} = require('../middlewares/authenticationMiddleware');
//post data
courseRouter.post('/courses', CourseController.createCourse);
// Retrieve a list of courses
courseRouter.get('/courses',checkLoggedIn, CourseController.getCourses);
// Retrieve details of a specific course
courseRouter.get('/courses/:courseId', CourseController.getCourseDetails);
// Mark a course as completed for a student
courseRouter.put('/courses/:courseId/completed', CourseController.markCourseAsCompleted);
// Retrieve course details for the student's dashboard
courseRouter.get('/students/:studentId/courses/:courseId/details', CourseController.getCourseDetailsForDashboard);
// Define a route for paginated course list
courseRouter.get('/coursesperpage', CourseController.getPaginatedCourses);

module.exports = courseRouter;
