import ACTIONS from '../constants/actions';
import { take, call, put, select, all } from 'redux-saga/effects';
import { forgetPasswordAction } from './../actions';
import axios from 'axios';

function forgetPasswordDetails(API_URL, email) {
  let LOGIN_URL = API_URL + `auth/resetpassword?email=${email}`;
  return axios({
    url: LOGIN_URL,
    method: 'GET',
    data: {},
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
    const action = yield take(ACTIONS.SEND_FORGET_PASSWORD_REQUEST);
    try {
      const API_URL = yield select((state) => state.appReducer.API_URL);
      const [response] = yield all([call(forgetPasswordDetails, API_URL, action.payload)]);
      const item = response && response.data;
      if (item && item.success === true) {
        yield put(forgetPasswordAction.fetchForgetPasswordSuccess(item));
      } else {
        let data = {
          'message': 'Error occured',
          'success': false
        }
        yield put(forgetPasswordAction.fetchForgetPasswordError(data));
      }
    }
    catch (e) {
      let data = {
        'message': 'Server Error',
        'success': false
      }
      yield put(forgetPasswordAction.fetchForgetPasswordError(data))
    }
  }
}
