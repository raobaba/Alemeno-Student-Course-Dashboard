// controllers/CourseController.js
const Course = require('../models/Course');
// Retrieve a list of courses
const createCourse = async (req, res) => {
  try {
    const courseId = await Course.createCourse(req.body);
    res.status(201).json({ courseId });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to create a new course' });
  }
};

const getCourses = async (req, res) => {
  try {
    const courses = await Course.findAll();
    res.json(courses);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve courses' });
  }
};
// Retrieve details of a specific course
const getCourseDetails = async (req, res) => {
  try {
    const courseId = req.params.courseId;
    const course = await Course.findById(courseId);
    if (!course) {
      return res.status(404).json({ error: 'Course not found' });
    }
    res.json(course);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve course details' });
  }
};
// Define other course-related controller functions here (e.g., create, update, delete).
module.exports = {
  createCourse,
  getCourses,
  getCourseDetails,
};
