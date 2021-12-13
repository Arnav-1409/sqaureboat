import ACTIONS from '../constants/actions';
import { take, call, put, select, all } from 'redux-saga/effects';
import { getAllJobAction } from './../actions';
import axios from 'axios';

function allJobDetails(API_URL, data) {
  let LOGIN_URL = API_URL + 'jobs';
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
export default function* getAllJobs() {
  while (true) {
    const action = yield take(ACTIONS.SEND_ALL_JOB_REQUEST);
    try {
      const API_URL = yield select((state) => state.appReducer.API_URL);
      const [response] = yield all([call(allJobDetails, API_URL, action.payload)]);
      const item = response && response.data;
      if (item && item.success === true) {
        yield put(getAllJobAction.fetchAllJobSuccess(item));
      } else {
        let data = {
          'message': 'Error occured',
          'success': false
        }
        yield put(getAllJobAction.fetchAllJobError(data));
      }
    }
    catch (e) {
      let data = {
        'message': 'Server Error',
        'success': false
      }
      yield put(getAllJobAction.fetchAllJobError(data))
    }
  }
}
