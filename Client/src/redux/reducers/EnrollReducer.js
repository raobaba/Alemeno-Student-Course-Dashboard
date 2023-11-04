import {
  ENROLL_COURSE_REQUEST,
  ENROLL_COURSE_SUCCESS,
  ENROLL_COURSE_FAILURE,
  FETCH_ENROLLED_COURSES_REQUEST,
  FETCH_ENROLLED_COURSES_SUCCESS,
  FETCH_ENROLLED_COURSES_FAILURE,
} from "../actionTypes/EnrollActionType";

const initialState = {
  enrolledCourses: [],
  loadingEnrollCourse: false,
  loadingEnrolledCourses: false,
  error: null,
};

const studentReducer = (state = initialState, action) => {
  switch (action.type) {
    case ENROLL_COURSE_REQUEST:
      return { ...state, loadingEnrollCourse: true, error: null };

    case ENROLL_COURSE_SUCCESS:
      return { ...state, loadingEnrollCourse: false, error: null };

    case ENROLL_COURSE_FAILURE:
      return { ...state, loadingEnrollCourse: false, error: action.error };

    case FETCH_ENROLLED_COURSES_REQUEST:
      return { ...state, loadingEnrolledCourses: true, error: null };

    case FETCH_ENROLLED_COURSES_SUCCESS:
      return {
        ...state,
        loadingEnrolledCourses: false,
        enrolledCourses: action.payload,
        error: null,
      };

    case FETCH_ENROLLED_COURSES_FAILURE:
      return { ...state, loadingEnrolledCourses: false, error: action.error };

    default:
      return state;
  }
};

export default studentReducer;
