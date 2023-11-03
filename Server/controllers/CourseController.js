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


const getPaginatedCourses = async (req, res) => {
  try {
    // Extract page and pageSize values from the request or JSON data.
    const { page, pageSize } = req.body;
    // Check if page and pageSize are valid numbers.
    if (isNaN(page) || isNaN(pageSize)) {
      return res.status(400).json({ error: 'Invalid page or pageSize values' });
    }
    const options = {
      page: parseInt(page),          // Parse page as an integer
      pageSize: parseInt(pageSize),  // Parse pageSize as an integer
    };
    // Use the options object to fetch paginated courses.
    const courses = await Course.findAllCourse(options);
    res.json({ courses });
  } catch (error) {
    console.error('Error in getPaginatedCourses:', error);
    res.status(500).json({ error: 'Failed to retrieve paginated courses' });
  }
};

const searchCourses = async (req, res) => {
  const { keyword, instructor, enrollmentStatus, duration } = req.query;

  try {
    const courses = await Course.searchCourses(keyword, instructor, enrollmentStatus, duration);
    res.json(courses);
  } catch (error) {
    console.error('Error in searchCourses:', error);
    res.status(500).json({ error: 'Failed to search for courses' });
  }
};

// Define other course-related controller functions here (e.g., create, update, delete).
module.exports = {
  createCourse,
  getCourses,
  getCourseDetails,
  markCourseAsCompleted,
  getCourseDetailsForDashboard,
  getPaginatedCourses,
  searchCourses
};
