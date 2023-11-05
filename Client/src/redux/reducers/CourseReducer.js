import {
  FETCH_COURSES_LOADING,
  FETCH_COURSES_SUCCESS,
  FETCH_COURSES_FAILURE,
  SET_PAGINATION, // Include the SET_PAGINATION action type

  FETCH_COURSE_LOADING,
  FETCH_COURSE_SUCCESS,
  FETCH_COURSE_FAILURE,
} from '../actionTypes/CourseActionType';

const initialCoursesState = {
  courses: [],
  loading: false,
  success: false,
  error: null,
  pagination: {
    page: 1, // Default page
    pageSize: 10, // Default page size (set to 10)
  },
};

const courseReducer = (state = initialCoursesState, action) => {
  switch (action.type) {
    case SET_PAGINATION:
      return {
        ...state,
        pagination: {
          page: action.payload.page,
          pageSize: action.payload.pageSize,
        },
      };
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

const initialDetailsState = {
  course: {},
  loading: false,
  success: false,
  error: null,
};

const detailsReducer = (state = initialDetailsState, action) => {
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

export { courseReducer, detailsReducer };
