import ACTIONS from '../constants/actions';

export const sendUpdatePasswordRequest = (data) => {
  return {
    type: ACTIONS.SEND_UPDATE_PASSWORD_REQUEST,
    payload: data
  };
}

export const fetchUpdatePasswordSuccess = (data) => {
  return {
    type: ACTIONS.FETCH_UPDATE_PASSWORD_SUCCESS,
    payload: data
  }
}

export const fetchUpdatePasswordError = (error) => {
  return {
    type: ACTIONS.FETCH_UPDATE_PASSWORD_ERROR,
    payload: error
  }
}