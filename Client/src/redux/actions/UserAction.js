import api from '../../service/api.js';
import {
  SIGN_UP_USER_LOADING,
  SIGN_UP_USER_SUCCESS,
  SIGN_UP_USER_FAILURE,
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
