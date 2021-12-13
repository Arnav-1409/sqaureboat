import ACTIONS from './../constants/actions';

export default (state, action) => {
  switch (action.type) {
    case ACTIONS.SEND_ALL_JOB_REQUEST:
      state = action.payload
      return { ...state, allJobErrMsg: false, allJobSuccessMsg: false, isAllJobFetching: true }

    case ACTIONS.FETCH_ALL_JOB_ERROR:
      return { ...state, allJobErrMsg: action.payload, isAllJobFetching: false, allJobSuccessMsg: false };

    case ACTIONS.FETCH_ALL_JOB_SUCCESS:
      return { ...state, allJobData: action.payload, allJobSuccessMsg: true, allJobErrMsg: undefined, isAllJobFetching: false };

    default:
      return { ...state };

  }

}
