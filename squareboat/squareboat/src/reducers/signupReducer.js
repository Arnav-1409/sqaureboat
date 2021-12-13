import ACTIONS from './../constants/actions';

export default (state, action) => {
  switch (action.type) {
    case ACTIONS.SEND_SIGNUP_REQUEST:
      state = action.payload
      return { ...state, signupErrMsg: false, signupSuccessMsg: false, isSignupFetching: true }

    case ACTIONS.FETCH_SIGNUP_ERROR:
      return { ...state, signupErrMsg: action.payload, isSignupFetching: false, signupSuccessMsg: false };

    case ACTIONS.CLEAR_SIGNUP_NOTIFICATINS:
      return { ...state, signupErrMsg: undefined, signupSuccessMsg: false, isSignupFetching: false };

    case ACTIONS.CLEAR_SIGNUP_SUCCESS_NOTIFICATINS:
      return { ...state, isSignupFetching: false };

    case ACTIONS.FETCH_SIGNUP_SUCCESS:
      return { ...state, signupData: action.payload, signupSuccessMsg: true, signupErrMsg: undefined, isSignupFetching: false };

    default:
      return { ...state };

  }

}
