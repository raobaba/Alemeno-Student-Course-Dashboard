// models/Course.js
const pool = require("../config/db.js");

const enrollStudentInCourse = async (courseId, studentId) => {
  try {
    // Check if the student is already enrolled in the course.
    const [existingEnrollment] = await pool.query(
      "SELECT * FROM students WHERE course_id = ? AND student_id = ?",
      [courseId, studentId]
    );
    if (existingEnrollment.length > 0) {
      // Student is already enrolled in the course.
      return false;
    }
    // Insert the student's enrollment record.
    await pool.query(
      "INSERT INTO students (course_id, student_id) VALUES (?, ?)",
      [courseId, studentId]
    );

    return true;
  } catch (error) {
    throw error;
  }
};
const getEnrolledCourses = async (studentId) => {
    try {
      const [enrolledCourses] = await pool.query(
        'SELECT c.name AS course_name, c.instructor AS instructor_name, c.thumbnail AS course_thumbnail ' +
        'FROM courses AS c ' +
        'INNER JOIN students AS s ON c.id = s.course_id ' +
        'WHERE s.student_id = ?',
        [studentId]
      );
      return enrolledCourses;
    } catch (error) {
      console.error('Error in getEnrolledCourses:', error);
      throw error;
    }
  };

module.exports = {
  enrollStudentInCourse,
  getEnrolledCourses,
};
