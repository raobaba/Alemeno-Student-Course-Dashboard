import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCourse } from "../redux/actions/CourseAction";
import { Link, useParams } from "react-router-dom";
import "../styles/CourseDetails.css";

function CourseDetails() {
  const dispatch = useDispatch();
  const { courseId } = useParams();

  // Access the course state from the Redux store
  const course = useSelector((state) => state.course.course);
  console.log(course);
  const loading = useSelector((state) => state.course.loading);

  useEffect(() => {
    // Dispatch the action to fetch the specific course when the component mounts
    dispatch(fetchCourse(courseId));
  }, [dispatch, courseId]);

  return (
    <div className="course-details">
      <h1 className="heading">Course Details</h1>
      {loading ? (
        <p className="course-text">Loading...</p>
      ) : (
        <div className="details-container">
          <div className="course-info">
            <h2 className="course-title">{course.name}</h2>
            <p className="course-text">
              <strong>Instructor:</strong> {course.instructor}
            </p>
            <p className="course-text">
              <strong>Description:</strong> {course.description}
            </p>
            <p className="course-text">
              <strong>Enrollment Status:</strong> {course.enrollment_status}
            </p>
            <p className="course-text">
              <strong>Course Duration:</strong> {course.duration}
            </p>
            <p className="course-text">
              <strong>Schedule:</strong> {course.schedule}
            </p>
            <p className="course-text">
              <strong>Location:</strong> {course.location}
            </p>
            <p className="course-text">
              <strong>Pre-requisites:</strong>
              {course.prerequisites && course.prerequisites.length > 0 ? (
                <ul>
                  {course.prerequisites.map((prerequisite, index) => (
                    <li style={{height:'auto'}} key={index}>{prerequisite}</li>
                  ))}
                </ul>
              ) : (
                <p>No prerequisites available</p>
              )}
            </p>
          </div>
          <div className="syllabus">
            <h3 className="syllabus-title">Syllabus</h3>
            {course.syllabus ? (
              <ul>
                {course.syllabus.map((item, index) => (
                  <li style={{ display: "grid",height:'auto' }} key={index}>
                    <strong>Week {item.week}:</strong>
                    <p>{item.topic}</p>
                    <p>{item.content}</p>
                  </li>
                ))}
              </ul>
            ) : (
              <p>Syllabus data not available</p>
            )}
          </div>
          <Link to="/" className="link-button">
            Back to Course List
          </Link>
        </div>
      )}
    </div>
  );
}

export default CourseDetails;
