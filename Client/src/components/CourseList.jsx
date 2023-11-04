import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCourses } from '../redux/actions/CourseAction';
import '../styles/CourseList.css';

function CourseList() {
  const dispatch = useDispatch();

  // Access the courses state from the Redux store
  const courses = useSelector((state) => state.courses.courses);
  const loading = useSelector((state) => state.courses.loading);

  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Dispatch the action to fetch courses when the component mounts
    dispatch(fetchCourses());
  }, [dispatch]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="course-listing">
      <h1>Course Listing</h1>
      <input
        type="text"
        placeholder="Search by course or instructor name"
        value={searchTerm}
        onChange={handleSearch}
      />
      <ul>
        {loading ? (
          <p>Loading...</p>
        ) : (
          courses
            .filter((course) => {
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
            ))
        )}
      </ul>
    </div>
  );
}

export default CourseList;
