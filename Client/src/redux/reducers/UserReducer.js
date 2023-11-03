import {
    SIGN_UP_USER_LOADING,
    SIGN_UP_USER_SUCCESS,
    SIGN_UP_USER_FAILURE,
  } from "../actionTypes/UserActionType";
  
  const initialState = {
    users: [],
    loading: false,
    success: false,
    error: null,
  };
  
  const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case SIGN_UP_USER_LOADING:
        return {
          ...state,
          loading: true,
          success: false,
          error: null,
        };
      case SIGN_UP_USER_SUCCESS:
        return {
          ...state,
          loading: false,
          success: true,
          error: null,
          users: [...state.users, action.payload],
        };
      case SIGN_UP_USER_FAILURE:
        return {
          ...state,
          loading: false,
          success: false,
          error: action.payload, // You can set the error message from the API response here
        };
      default:
        return state;
    }
  };
  
  export default userReducer;
  