import ACTIONS from '../constants/actions';
import { take, call, put, select, all } from 'redux-saga/effects';
import { signupAction } from './../actions';
import axios from 'axios';

function signupDetails(API_URL, signupData) {
  let LOGIN_URL = API_URL + 'auth/register';
  return axios({
    url: LOGIN_URL,
    method: 'POST',
    data: signupData,
    headers: {
      "Content-type": "application/json",
    },
  })
    .catch(err => {
      console.log(err);
    });
}
export default function* signup() {
  while (true) {
    const action = yield take(ACTIONS.SEND_SIGNUP_REQUEST);
    try {
      const API_URL = yield select((state) => state.appReducer.API_URL);
      const [response] = yield all([call(signupDetails, API_URL, action.payload)]);
      const item = response && response.data;
      if (item && item.success === true) {
        yield put(signupAction.fetchSignupSuccess(item));
      } else {
        let data = {
          'message': 'Error occured',
          'success': false
        }
        yield put(signupAction.fetchSignupError(data));
      }
    }
    catch (e) {
      let data = {
        'message': 'Server Error',
        'success': false
      }
      yield put(signupAction.fetchSignupError(data))
    }
  }
}
