import axios from "axios";
import {
  ENROLL_COURSE_REQUEST,
  ENROLL_COURSE_SUCCESS,
  ENROLL_COURSE_FAILURE,
  FETCH_ENROLLED_COURSES_REQUEST,
  FETCH_ENROLLED_COURSES_SUCCESS,
  FETCH_ENROLLED_COURSES_FAILURE,
} from "../actionTypes/EnrollActionType.js";

export const enrollCourse = (studentId, courseId) => {
  return async (dispatch) => {
    dispatch({ type: ENROLL_COURSE_REQUEST });

    try {
      const response = await axios.post(
        `http://localhost:8000/api/v1/courses/${courseId}/enroll`
      );
      dispatch({ type: ENROLL_COURSE_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: ENROLL_COURSE_FAILURE, error: error.message });
    }
  };
};

export const fetchEnrolledCourses = (studentId) => {
  return async (dispatch) => {
    dispatch({ type: FETCH_ENROLLED_COURSES_REQUEST });

    try {
      const response = await axios.get(
        `http://localhost:8000/api/v1/students/${studentId}/courses`
      );
      dispatch({
        type: FETCH_ENROLLED_COURSES_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      dispatch({ type: FETCH_ENROLLED_COURSES_FAILURE, error: error.message });
    }
  };
};
