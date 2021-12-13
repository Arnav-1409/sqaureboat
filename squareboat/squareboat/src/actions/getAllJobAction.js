import ACTIONS from '../constants/actions';

export const sendAllJobRequest = (data) => {
  return {
    type: ACTIONS.SEND_ALL_JOB_REQUEST,
    payload: data
  };
}

export const fetchAllJobSuccess = (data) => {
  return {
    type: ACTIONS.FETCH_ALL_JOB_SUCCESS,
    payload: data
  }
}

export const fetchAllJobError = (error) => {
  return {
    type: ACTIONS.FETCH_ALL_JOB_ERROR,
    payload: error
  }
}