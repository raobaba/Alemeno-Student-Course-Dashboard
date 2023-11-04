// CourseReducer.js
import {
    FETCH_COURSES_LOADING,
    FETCH_COURSES_SUCCESS,
    FETCH_COURSES_FAILURE,
  } from '../actionTypes/CourseActionType';
  
  const initialState = {
    courses: [],
    loading: false,
    success: false,
    error: null,
  };
  
  const courseReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_COURSES_LOADING:
        return {
          ...state,
          loading: true,
          success: false,
          error: null,
        };
      case FETCH_COURSES_SUCCESS:
        return {
          ...state,
          loading: false,
          success: true,
          error: null,
          courses: action.payload,
        };
      case FETCH_COURSES_FAILURE:
        return {
          ...state,
          loading: false,
          success: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default courseReducer;
  