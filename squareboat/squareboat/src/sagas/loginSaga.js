import ACTIONS from '../constants/actions';
import { take, call, put, select, all } from 'redux-saga/effects';
import { loginAction } from './../actions';
import axios from 'axios';

function loginDetails(API_URL, loginData) {
  let LOGIN_URL = API_URL + 'auth/login';
  return axios({
    url: LOGIN_URL,
    method: 'POST',
    data: loginData,
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
    const action = yield take(ACTIONS.SEND_LOGIN_REQUEST);
    try {
      const API_URL = yield select((state) => state.appReducer.API_URL);
      const [response] = yield all([call(loginDetails, API_URL, action.payload)]);
      const item = response && response.data;
      if (item && item.success === true) {
        yield put(loginAction.fetchLoginSuccess(item));
      } else {
        let data = {
          'message': 'Error occured',
          'success': false
        }
        yield put(loginAction.fetchLoginError(data));
      }
    }
    catch (e) {
      let data = {
        'message': 'Server Error',
        'success': false
      }
      yield put(loginAction.fetchLoginError(data))
    }
  }
}
