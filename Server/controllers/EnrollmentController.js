// controllers/EnrollmentController.js
const Course = require("../models/Enrollment.js");
// Enroll a student in a course
const enrollStudentInCourse = async (req, res) => {
  try {
    const courseId = req.params.courseId;
    const studentId = req.body.studentId;

    const enrollmentResult = await Course.enrollStudentInCourse(
      courseId,
      studentId
    );

    if (enrollmentResult === false) {
      return res
        .status(400)
        .json({ error: "Student is already enrolled in the course" });
    }

    res
      .status(201)
      .json({ message: "Student enrolled in the course successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Failed to enroll the student in the course" });
  }
};

// Retrieve enrolled courses for a student
const getEnrolledCourses = async (req, res) => {
  try {
    const studentId = req.params.studentId;

    const enrolledCourses = await Course.getEnrolledCourses(studentId);

    res.json(enrolledCourses);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve enrolled courses" });
  }
};

// Define other course-related controller functions here (e.g., create, update, delete).
module.exports = {
  enrollStudentInCourse,
  getEnrolledCourses,
};
