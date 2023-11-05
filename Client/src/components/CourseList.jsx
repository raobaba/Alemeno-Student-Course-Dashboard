import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cookies from 'js-cookie';
import { fetchCourses } from "../redux/actions/CourseAction";
import { enrollCourse } from "../redux/actions/EnrollAction";
import { Link } from "react-router-dom"; // Import Link from React Router
import "../styles/CourseList.css";

function CourseList() {
  const studentId = Cookies.get('studentId');
  const dispatch = useDispatch();

  // Access the courses state from the Redux store
  const courses = useSelector((state) => state.courses.courses);
  const loading = useSelector((state) => state.courses.loading);

  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    // Dispatch the action to fetch courses when the component mounts
    dispatch(fetchCourses());
  }, [dispatch]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleEnroll = (courseId) => {
    dispatch(enrollCourse(courseId,studentId));
  };

  return (
    <div className="course-listing">
      <h1>Course Listing</h1>
      <input
       className="search-input"
        type="text"
        placeholder="Search by course or instructor name"
        value={searchTerm}
        onChange={handleSearch}
      />
      <ul className="course-list">
        {loading ? (
          <p>Loading...</p>
        ) : (
          courses
            .filter((course) => {
              const searchString =
                `${course.name} ${course.instructor}`.toLowerCase();
              return searchString.includes(searchTerm.toLowerCase());
            })
            .map((course) => (
              <li key={course.id}>
               <div>
               <div className="course-info">
                  <h2>{course.name}</h2>
                  <p><strong>Instructor:</strong> {course.instructor}</p>
                  <p>{course.description}</p>
                </div>
                <div style={{display:'flex',justifyContent:'space-around'}}>
                <button className="details-button" onClick={() => handleEnroll(course.id)}>
                      Enroll In Course
                    </button>
                <button className="details-button">
                  <Link to={`/course-details/${course.id}`}>View Details</Link>
                </button>
                </div>
               </div>
              </li>
            ))
        )}
      </ul>
    </div>
  );
}

export default CourseList;





// import React, { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import Cookies from 'js-cookie';
// import { fetchCourses, setPagination } from "../redux/actions/CourseAction"; // Import setPagination action
// import { enrollCourse } from "../redux/actions/EnrollAction";
// import { Link } from "react-router-dom";
// import "../styles/CourseList.css";

// function CourseList() {
//   const studentId = Cookies.get('studentId');
//   const dispatch = useDispatch();
//   const courses = useSelector((state) => state.courses.courses);
//   const loading = useSelector((state) => state.courses.loading);
//   const pagination = useSelector((state) => state.courses.pagination); // Get pagination data
//   console.log(courses)
//   const [searchTerm, setSearchTerm] = useState("");

//   useEffect(() => {
//     dispatch(fetchCourses(pagination.page, pagination.pageSize));
//   }, [dispatch, pagination.page, pagination.pageSize]);// Add pagination.page and pagination.pageSize to dependencies

//   const handleSearch = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   const handleEnroll = (courseId) => {
//     dispatch(enrollCourse(courseId, studentId));
//   };

//   const handlePageChange = (newPage) => {
//     // Update the pagination data when page changes
//     dispatch(setPagination(newPage, pagination.pageSize));
//   };

//   return (
//     <div className="course-listing">
//       <h1>Course Listing</h1>
//       <input
//         className="search-input"
//         type="text"
//         placeholder="Search by course or instructor name"
//         value={searchTerm}
//         onChange={handleSearch}
//       />
//       <ul className="course-list">
//         {loading ? (
//           <p>Loading...</p>
//         ) : (
//           courses
//             .filter((course) => {
//               const searchString = `${course.name} ${course.instructor}`.toLowerCase();
//               return searchString.includes(searchTerm.toLowerCase());
//             })
//             .map((course) => (
//               <li key={course.id}>
//                 <div>
//                   <div className="course-info">
//                     <h2>{course.name}</h2>
//                     <p><strong>Instructor:</strong> {course.instructor}</p>
//                     <p>{course.description}</p>
//                   </div>
//                   <div style={{ display: 'flex', justifyContent: 'space-around' }}>
//                     <button className="details-button" onClick={() => handleEnroll(course.id)}>
//                       Enroll In Course
//                     </button>
//                     <button className="details-button">
//                       <Link to={`/course-details/${course.id}`}>View Details</Link>
//                     </button>
//                   </div>
//                 </div>
//               </li>
//             ))
//         )}
//       </ul>
//       <div className="pagination">
//         <button
//           onClick={() => handlePageChange(pagination.page - 1)}
//           disabled={pagination.page === 1}
//         >
//           Previous
//         </button>
//         <span>Page {pagination.page}</span>
//         <button
//           onClick={() => handlePageChange(pagination.page + 1)}
//           disabled={courses.length < pagination.pageSize}
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// }

// export default CourseList;

