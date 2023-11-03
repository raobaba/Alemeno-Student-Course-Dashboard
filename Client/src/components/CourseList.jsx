// CourseListing.js
import React, { useState, useEffect } from 'react';
import '../styles/CourseList.css'; // Import your CSS file for styling.

function CourseList() {
  const [courses, setCourses] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Dummy API or sample data (replace with actual API calls)
    const sampleCourses = [
      {
        id: 1,
        name: 'Course 1',
        instructor: 'Instructor A',
        description: 'Description for Course 1',
      },
      {
        id: 2,
        name: 'Course 2',
        instructor: 'Instructor B',
        description: 'Description for Course 2',
      },
      // Add more sample courses here
    ];

    setCourses(sampleCourses);
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="course-listing">
      <h1>Course Listing</h1>
      <input
        type="text"
        placeholder="Search by course or instructor"
        value={searchTerm}
        onChange={handleSearch}
      />
      <ul>
        {courses
          .filter((course) => {
            // Filter courses based on the search term
            const searchString = `${course.name} ${course.instructor}`.toLowerCase();
            return searchString.includes(searchTerm.toLowerCase());
          })
          .map((course) => (
            <li key={course.id}>
              <div className="course-info">
                <h2>{course.name}</h2>
                <p>Instructor: {course.instructor}</p>
                <p>{course.description}</p>
              </div>
              <button
                onClick={() => {
                  // Handle course details navigation (you can use React Router for this)
                  console.log(`View details for ${course.name}`);
                }}
              >
                View Details
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default CourseList;
