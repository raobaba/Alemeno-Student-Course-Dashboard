import api from '../../service/api.js'; 

import {
  ENROLL_COURSE_REQUEST,
  ENROLL_COURSE_SUCCESS,
  ENROLL_COURSE_FAILURE,
  
  FETCH_ENROLLED_COURSES_REQUEST,
  FETCH_ENROLLED_COURSES_SUCCESS,
  FETCH_ENROLLED_COURSES_FAILURE,
} from '../actionTypes/EnrollActionType.js';

export const enrollCourse = (studentId, courseId) => {
  console.log("courseId",courseId);
  console.log("studentId",studentId)
    return async (dispatch) => {
      dispatch({ type: ENROLL_COURSE_REQUEST });
      const requested = {
        studentId
      }
      try {
        const response = await api.post(`/courses/${courseId}/enroll`, requested );
        dispatch({ type: ENROLL_COURSE_SUCCESS, payload: response.data });
        console.log("enrolledCourse",response.data)
      } catch (error) {
        dispatch({ type: ENROLL_COURSE_FAILURE, error: error.response.data.error });
        console.log(error.response.data.error);
        alert(error.response.data.error)
      }
    };
  };
  

export const fetchEnrolledCourses = (studentId) => {
  return async (dispatch) => {
    dispatch({ type: FETCH_ENROLLED_COURSES_REQUEST });

    try {
      const response = await api.get(`/students/${studentId}/courses`);
      dispatch({
        type: FETCH_ENROLLED_COURSES_SUCCESS,
        payload: response.data,
      });
      console.log("fetchEnrolledCourses",response.data);
    } catch (error) {
      dispatch({ type: FETCH_ENROLLED_COURSES_FAILURE, error: error.message });
      console.log(error);
    }
  };
};
