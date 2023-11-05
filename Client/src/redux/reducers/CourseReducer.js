// CourseReducer.js
import {
    FETCH_COURSES_LOADING,
    FETCH_COURSES_SUCCESS,
    FETCH_COURSES_FAILURE,


    FETCH_COURSE_LOADING,
    FETCH_COURSE_SUCCESS,
    FETCH_COURSE_FAILURE,
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


  const detailInitialState = {
    course: {},
    loading: false,
    success: false,
    error: null,
  };
  
  const detailsReducer = (state = detailInitialState, action) => {
    switch (action.type) {
      case FETCH_COURSE_LOADING:
        return {
          ...state,
          loading: true,
          success: false,
          error: null,
        };
      case FETCH_COURSE_SUCCESS:
        return {
          ...state,
          loading: false,
          success: true,
          error: null,
          course: action.payload,
        };
      case FETCH_COURSE_FAILURE:
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
  

  export {courseReducer,detailsReducer};
 