import api from '../../service/api.js';
import {
  SIGN_UP_USER_LOADING,
  SIGN_UP_USER_SUCCESS,
  SIGN_UP_USER_FAILURE,
  LOGIN_USER_LOADING,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
} from '../actionTypes/UserActionType';

export const signUpUser = (username, email, password) => {
  return (dispatch) => {
    dispatch({ type: SIGN_UP_USER_LOADING });

    const requestData = {
      username,
      email,
      password,
    };

    api
      .post('/user/signup', requestData)
      .then((response) => {
        dispatch({
          type: SIGN_UP_USER_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: SIGN_UP_USER_FAILURE,
          payload: error.response.data.error,
        });
      });
  };
};

export const loginUser = (email, password) => {
    return (dispatch) => {
      dispatch({ type: LOGIN_USER_LOADING });
  
      const requestData = {
        email,
        password,
      };
  
      api
        .post('/user/login', requestData) // Adjust the API endpoint as per your backend
        .then((response) => {
          dispatch({
            type: LOGIN_USER_SUCCESS,
            payload: response.data,
          });
        })
        .catch((error) => {
          dispatch({
            type: LOGIN_USER_FAILURE,
            payload: error.response.data.error,
          });
        });
    };
  };
