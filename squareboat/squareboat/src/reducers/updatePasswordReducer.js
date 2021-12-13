import ACTIONS from './../constants/actions';

export default (state, action) => {
  switch (action.type) {
    case ACTIONS.SEND_UPDATE_PASSWORD_REQUEST:
      state = action.payload
      return { ...state, updatePasswordErrMsg: false, updatePasswordSuccessMsg: false, isUpdatePasswordFetching: true }

    case ACTIONS.FETCH_UPDATE_PASSWORD_ERROR:
      return { ...state, updatePasswordErrMsg: action.payload, isUpdatePasswordFetching: false, updatePasswordSuccessMsg: false };

    case ACTIONS.FETCH_UPDATE_PASSWORD_SUCCESS:
      return { ...state, updatePasswordData: action.payload, updatePasswordSuccessMsg: true, updatePasswordErrMsg: undefined, isUpdatePasswordFetching: false };

    default:
      return { ...state };

  }

}
