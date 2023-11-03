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


const markCourseAsCompleted = async (req, res) => {
  try {
    const courseId = req.params.courseId;
    const studentId = req.body.studentId;

    const completionResult = await Course.markCourseAsCompleted(courseId, studentId);

    if (completionResult === false) {
      return res.status(400).json({ error: 'Student is not enrolled in the course or the course does not exist' });
    }

    res.json({ message: 'Course marked as completed for the student' });
  } catch (error) {
    console.error('Error in markCourseAsCompleted:', error);
    throw error;
  }
};

const getCourseDetailsForDashboard = async (req, res) => {
  try {
    const studentId = req.params.studentId;
    const courseId = req.params.courseId;

    const courseDetails = await Course.getCourseDetailsForDashboard(studentId, courseId);

    if (!courseDetails) {
      return res.status(400).json({ error: 'Student is not enrolled in the course or the course does not exist' });
    }

    res.json(courseDetails);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve course details for the student' });
  }
};

// Define other course-related controller functions here (e.g., create, update, delete).
module.exports = {
  createCourse,
  getCourses,
  getCourseDetails,
  markCourseAsCompleted,
  getCourseDetailsForDashboard
};
