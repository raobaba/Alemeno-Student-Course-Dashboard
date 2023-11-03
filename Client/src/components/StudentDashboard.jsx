// StudentDashboard.js
import React, { useState } from 'react';
import '../styles/StudentDashboard.css'; // Import your CSS file for styling.

function StudentDashboard({ enrolledCourses }) {
  const [completedCourses, setCompletedCourses] = useState([]);

  const markAsCompleted = (courseId) => {
    setCompletedCourses((prevCourses) => [...prevCourses, courseId]);
  };

  return (
    <div className="student-dashboard">
      <h1>Student Dashboard</h1>
      <div className="enrolled-courses">
        {enrolledCourses.map((course) => (
          <div key={course.id} className="course-card">
            <img src={course.thumbnail} alt={course.name} />
            <div className="course-details">
              <h2>{course.name}</h2>
              <p>Instructor: {course.instructor}</p>
              <p>Due Date: {course.dueDate}</p>
              <div className="progress-bar">
                <div
                  className={`progress ${completedCourses.includes(course.id) ? 'completed' : ''}`}
                />
              </div>
              <button
                onClick={() => markAsCompleted(course.id)}
                disabled={completedCourses.includes(course.id)}
              >
                Mark as Completed
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StudentDashboard;
