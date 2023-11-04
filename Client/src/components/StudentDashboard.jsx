import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { enrollCourse, fetchEnrolledCourses } from '../redux/actions/EnrollAction.js';
import '../styles/StudentDashboard.css'; // Import the CSS

function StudentDashboard({ studentId }) {
  const dispatch = useDispatch();

  const [loadingEnrollCourse, setLoadingEnrollCourse] = useState(false);

  // Fetch the enrolled courses when the component mounts
  useEffect(() => {
    dispatch(fetchEnrolledCourses(studentId));
  }, [dispatch, studentId]);

  // Access the enrolled courses state from the Redux store
  const enrolledCourses = useSelector((state) => state.student.enrolledCourses);
  const loadingEnrolledCourses = useSelector((state) => state.student.loadingEnrolledCourses);
  console.log(enrolledCourses)
  // const handleEnrollCourse = (courseId) => {
  //   setLoadingEnrollCourse(true);

  //   // Dispatch the action to enroll in the course
  //   dispatch(enrollCourse(studentId, courseId))
  //     .then(() => {
  //       setLoadingEnrollCourse(false);
  //     })
  //     .catch(() => {
  //       setLoadingEnrollCourse(false);
  //     });
  // };

  return (
    <div className="dashboard-container">
      <h1>Student Dashboard</h1>
      <h2>Enrolled Courses:</h2>
      {/* {loadingEnrolledCourses ? (
        <p>Loading enrolled courses...</p>
      ) : (
        <ul className="course-list">
          {Array.isArray(enrolledCourses) ? (
            enrolledCourses.map((course) => (
              <li key={course.id} className="course-list-item">
                <h3>{course.name}</h3>
                <p className="course-details">Instructor: {course.instructor}</p>
                <p className="course-details">Due Date: {course.dueDate}</p>
                <div className="course-progress">
                  <span className="course-details">Progress: {course.progress}%</span>
                  <div className="course-progress-bar">
                    <div
                      className="course-progress-fill"
                      style={{ width: `${course.progress}%` }}
                    ></div>
                  </div>
                </div>
                <button
                  onClick={() => handleEnrollCourse(course.id)}
                  className="enroll-button"
                  disabled={loadingEnrollCourse}
                >
                  {loadingEnrollCourse ? 'Enrolling...' : 'Enroll'}
                </button>
              </li>
            ))
          ) : (
            <p>No enrolled courses found.</p>
          )}
        </ul>
      )} */}
    </div>
  );
}

export default StudentDashboard;
