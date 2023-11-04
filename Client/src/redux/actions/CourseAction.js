// CourseActions.js
import api from '../../service/api'; // Ensure your API configuration is correct
import {
  FETCH_COURSES_LOADING,
  FETCH_COURSES_SUCCESS,
  FETCH_COURSES_FAILURE,
} from '../actionTypes/CourseActionType';

export const fetchCourses = () => {
  return (dispatch) => {
    dispatch({ type: FETCH_COURSES_LOADING });

    api
      .get('/courses') // Use the correct API endpoint
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
