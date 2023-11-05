// CourseActions.js
import api from '../../service/api'; // Ensure your API configuration is correct
import {
  FETCH_COURSES_LOADING,
  FETCH_COURSES_SUCCESS,
  FETCH_COURSES_FAILURE,

  FETCH_COURSE_LOADING,
  FETCH_COURSE_SUCCESS,
  FETCH_COURSE_FAILURE,
  SET_PAGINATION, // Include the SET_PAGINATION action type
} from '../actionTypes/CourseActionType';

// Add a new action creator for setting pagination
export const setPagination = (page, pageSize) => {
  return {
    type: SET_PAGINATION,
    payload: { page, pageSize },
  };
};

// CourseActions.js
export const fetchCourses = (page, pageSize) => {
  return (dispatch) => {
    dispatch(setPagination(page, pageSize)); // Set pagination data

    dispatch({ type: FETCH_COURSES_LOADING });

    api
      .get('/coursesperpage', { params: { page, pageSize } }) // Include pagination parameters in the request
      .then((response) => {
        dispatch({
          type: FETCH_COURSES_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: FETCH_COURSES_FAILURE,
          payload: error.response.data.error,
        });
      });
  };
};


export const fetchCourse = (courseId) => {
  return (dispatch) => {
    dispatch({ type: FETCH_COURSE_LOADING });

    api
      .get(`/courses/${courseId}`)
      .then((response) => {
        dispatch({
          type: FETCH_COURSE_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: FETCH_COURSE_FAILURE,
          payload: error.response.data.error,
        });
      });
  };
};
