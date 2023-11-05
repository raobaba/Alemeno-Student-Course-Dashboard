import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import { useDispatch, useSelector } from 'react-redux';
import { enrollCourse, fetchEnrolledCourses } from '../redux/actions/EnrollAction.js';
import '../styles/StudentDashboard.css';

function StudentDashboard() {
  const studentId = Cookies.get('studentId');
  const dispatch = useDispatch();
  const [loadingEnrollCourse, setLoadingEnrollCourse] = useState(false);

  // Fetch the enrolled courses when the component mounts
  useEffect(() => {
    dispatch(fetchEnrolledCourses(studentId));
  }, [dispatch, studentId]);

  const enrolledCourses = useSelector((state) => state.student.enrolledCourses);
  const loadingEnrolledCourses = useSelector((state) => state.student.loadingEnrolledCourses);

  const handleEnrollCourse = (courseId) => {
    setLoadingEnrollCourse(true);

    dispatch(enrollCourse(studentId, courseId))
      .then(() => {
        setLoadingEnrollCourse(false);
      })
      .catch(() => {
        setLoadingEnrollCourse(false);
      });
  };

  return (
    <div className="dashboard-container">
      <h1>Student Dashboard</h1>
      <h2>Enrolled Courses:</h2>
      {loadingEnrolledCourses ? (
        <p>Loading enrolled courses...</p>
      ) : (
        <ul className="course-lister">
          {Array.isArray(enrolledCourses) && enrolledCourses.length > 0 ? (
            enrolledCourses.map((course) => (
              <li key={course.course_id} className="course-item">
                <div>
                <h3>{course.course_name}</h3>
                </div>
               <div className="dash-board">
               <p className="course-details"><strong>Instructor:</strong> <br /> {course.instructor_name}</p>
                <div className="course-progress">
                  <span className="course-details"><strong>Progress:</strong> {course.progress}%</span>
                  <div className="course-progress-bar">
                    <div
                      className="course-progress-fill"
                      style={{ width: `${course.progress}%` }}
                    ></div>
                  </div>
                </div>
                <button
                  onClick={() => handleEnrollCourse(course.course_id)}
                  className="enroll-button"
                  disabled={loadingEnrollCourse}
                >
                  {loadingEnrollCourse ? 'Completing...' : 'Complete'}
                </button>
               </div>
                
              </li>
            ))
          ) : (
            <p>No enrolled courses found.</p>
          )}
        </ul>
      )}
    </div>
  );
}

export default StudentDashboard;
