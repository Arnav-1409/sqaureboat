import ACTIONS from './../constants/actions';

export default (state, action) => {
  switch (action.type) {
    case ACTIONS.SEND_FORGET_PASSWORD_REQUEST:
      state = action.payload
      return { ...state, forgetPasswordErrMsg: false, forgetPasswordSuccessMsg: false, isForgetPasswordFetching: true }

    case ACTIONS.FETCH_FORGET_PASSWORD_ERROR:
      return { ...state, forgetPasswordErrMsg: action.payload, isForgetPasswordFetching: false, forgetPasswordSuccessMsg: false };

    case ACTIONS.FETCH_FORGET_PASSWORD_SUCCESS:
      return { ...state, forgetPasswordData: action.payload, forgetPasswordSuccessMsg: true, forgetPasswordErrMsg: undefined, isForgetPasswordFetching: false };

    default:
      return { ...state };

  }

}
