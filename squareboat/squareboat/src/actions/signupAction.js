import ACTIONS from '../constants/actions';

export const sendSignupRequest = (signupDetails) => {
  return {
    type: ACTIONS.SEND_SIGNUP_REQUEST,
    payload: signupDetails
  };
}

export const fetchSignupSuccess = (signupData) => {
  return {
    type: ACTIONS.FETCH_SIGNUP_SUCCESS,
    payload: signupData
  }
}

export const fetchSignupError = (errorMsg) => {
  return {
    type: ACTIONS.FETCH_SIGNUP_ERROR,
    payload: errorMsg
  }
}

export const clearSignupNotifications = () => {
  return {
    type: ACTIONS.CLEAR_SIGNUP_NOTIFICATINS
  }
}

export const clearSignupSuccessNotifications = () => {
  return {
    type: ACTIONS.CLEAR_SIGNUP_SUCCESS_NOTIFICATINS
  }
}