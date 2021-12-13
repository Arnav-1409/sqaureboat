import ACTIONS from '../constants/actions';
import { take, call, put, select, all } from 'redux-saga/effects';
import { updatePasswordAction } from './../actions';
import axios from 'axios';

function updatePasswordDetails(API_URL, data) {
  let LOGIN_URL = API_URL + `auth/resetpassword`;
  return axios({
    url: LOGIN_URL,
    method: 'POST',
    data: data,
    headers: {
      "Content-type": "application/json",
    },
  })
    .catch(err => {
      console.log(err);
    });
}
export default function* login() {
  while (true) {
    const action = yield take(ACTIONS.SEND_UPDATE_PASSWORD_REQUEST);
    try {
      const API_URL = yield select((state) => state.appReducer.API_URL);
      const [response] = yield all([call(updatePasswordDetails, API_URL, action.payload)]);
      const item = response && response.data;
      if (item && item.success === true) {
        yield put(updatePasswordAction.fetchUpdatePasswordSuccess(item));
      } else {
        let data = {
          'message': 'Error occured',
          'success': false
        }
        yield put(updatePasswordAction.fetchUpdatePasswordError(data));
      }
    }
    catch (e) {
      let data = {
        'message': 'Server Error',
        'success': false
      }
      yield put(updatePasswordAction.fetchUpdatePasswordError(data))
    }
  }
}
