import ACTIONS from '../constants/actions';

export const sendForgetPasswordRequest = (email) => {
  return {
    type: ACTIONS.SEND_FORGET_PASSWORD_REQUEST,
    payload: email
  };
}

export const fetchForgetPasswordSuccess = (data) => {
  return {
    type: ACTIONS.FETCH_FORGET_PASSWORD_SUCCESS,
    payload: data
  }
}

export const fetchForgetPasswordError = (error) => {
  return {
    type: ACTIONS.FETCH_FORGET_PASSWORD_ERROR,
    payload: error
  }
}