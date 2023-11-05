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
    return async (dispatch) => {
      dispatch({ type: ENROLL_COURSE_REQUEST });
  
      try {
        const response = await api.post(`/courses/${courseId}/enroll`, { studentId });
        dispatch({ type: ENROLL_COURSE_SUCCESS, payload: response.data });
        console.log(response.data)
      } catch (error) {
        dispatch({ type: ENROLL_COURSE_FAILURE, error: error.message });
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
    } catch (error) {
      dispatch({ type: FETCH_ENROLLED_COURSES_FAILURE, error: error.message });
    }
  };
};
