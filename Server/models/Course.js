// models/Course.js
const pool = require('../config/db.js');


const createCourse = async (courseData) => {
  const { name, instructor, description, enrollmentStatus, thumbnail, duration, schedule, location, prerequisites, syllabus, students } = courseData;

  const [result] = await pool.query(
    'INSERT INTO courses (name, instructor, description, enrollment_status, thumbnail, duration, schedule, location) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
    [name, instructor, description, enrollmentStatus, thumbnail, duration, schedule, location]
  );

  const courseId = result.insertId;

  await Promise.all(prerequisites.map(async (prerequisite) => {
    await pool.query('INSERT INTO prerequisites (course_id, prerequisite) VALUES (?, ?)', [courseId, prerequisite]);
  }));

  await Promise.all(syllabus.map(async (item) => {
    await pool.query('INSERT INTO syllabus (course_id, week, topic, content) VALUES (?, ?, ?, ?)', [courseId, item.week, item.topic, item.content]);
  }));

  await Promise.all(students.map(async (student) => {
    await pool.query('INSERT INTO students (course_id, student_id, student_name, student_email) VALUES (?, ?, ?, ?)', [courseId, student.id, student.name, student.email]);
  }));

  return courseId;
};
const findAll = async () => {
  const [rows] = await pool.query('SELECT * FROM courses');
  return rows;
};
const findById = async (courseId) => {
  const [rows] = await pool.query('SELECT * FROM courses WHERE id = ?', [courseId]);
  return rows[0] || null;
};

const markCourseAsCompleted = async (courseId, studentId) => {
  try {
    // Check if the student is enrolled in the course.
    const [enrollment] = await pool.query('SELECT * FROM students WHERE course_id = ? AND student_id = ?', [courseId, studentId]);
    if (enrollment.length === 0) {
      // Student is not enrolled in the course.
      return false;
    }
    // Mark the course as completed for the student.
    await pool.query('UPDATE students SET completed = 1 WHERE course_id = ? AND student_id = ?', [courseId, studentId]);
    return true;
  } catch (error) {
    console.error('Error in markCourseAsCompleted:', error);
    throw error;
  }
};

const getCourseDetailsForDashboard = async (studentId, courseId) => {
  try {
    // Check if the student is enrolled in the course.
    const [enrollment] = await pool.query('SELECT * FROM students WHERE course_id = ? AND student_id = ?', [courseId, studentId]);
    if (enrollment.length === 0) {
      // Student is not enrolled in the course.
      return null;
    }

    // Retrieve detailed information about the course.
    const [courseDetails] = await pool.query('SELECT * FROM courses WHERE id = ?', [courseId]);

    return courseDetails[0] || null;
  } catch (error) {
    console.error('Error in getCourseDetailsForDashboard:', error);
    throw error;
  }
};


module.exports = {
  createCourse,
  findAll,
  findById,
  markCourseAsCompleted,
  getCourseDetailsForDashboard
};