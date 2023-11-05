import api from '../../service/api.js';
import Cookies from 'js-cookie';
import {
  SIGN_UP_USER_LOADING,
  SIGN_UP_USER_SUCCESS,
  SIGN_UP_USER_FAILURE,
  LOGIN_USER_LOADING,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
} from '../actionTypes/UserActionType';

export const signUpUser = (name, email, password) => {
  return (dispatch) => {
    dispatch({ type: SIGN_UP_USER_LOADING });

    const requestData = {
      name,
      email,
      password,
    };
console.log(requestData)
    api
      .post('/student/signup', requestData)
      .then((response) => {
        dispatch({
          type: SIGN_UP_USER_SUCCESS,
          payload: response.data,
        });
        console.log('Signup Successful. Response Data:', response.data.user.id);
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
        .post('/student/login', requestData) // Adjust the API endpoint as per your backend
        .then((response) => {
          dispatch({
            type: LOGIN_USER_SUCCESS,
            payload: response.data,
          });
          Cookies.set('studentId', response.data.user.id);
          console.log('Login Successful. Response Data:', response.data.user.id);
        })
        .catch((error) => {
          dispatch({
            type: LOGIN_USER_FAILURE,
            payload: error.response.data.error,
          });
        });
    };
  };
