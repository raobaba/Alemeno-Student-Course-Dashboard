const express = require('express');
const courseRouter = express.Router();
const CourseController = require('../controllers/CourseController');
const checkLoggedIn = require('../middlewares/authenticationMiddleware');
//post data

courseRouter.post('/courses', CourseController.createCourse);
// Retrieve a list of courses
courseRouter.get('/courses',CourseController.getCourses);
// Retrieve details of a specific course
courseRouter.get('/courses/:courseId', CourseController.getCourseDetails);
// Mark a course as completed for a student
courseRouter.put('/courses/:courseId/completed',checkLoggedIn, CourseController.markCourseAsCompleted);
// Retrieve course details for the student's dashboard
courseRouter.get('/students/:studentId/courses/:courseId/details',checkLoggedIn, CourseController.getCourseDetailsForDashboard);
// Define a route for paginated course list
courseRouter.get('/coursesperpage', CourseController.getPaginatedCourses);
//search by 
courseRouter.get('/search', CourseController.searchCourses);


module.exports = courseRouter;
