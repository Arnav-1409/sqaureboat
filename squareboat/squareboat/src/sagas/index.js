import { fork } from "redux-saga/effects";
import { all } from 'redux-saga/effects';
import loginSaga from './loginSaga';
import signupSaga from './signupSaga';
import forgetPasswordSaga from './forgetPasswordSaga';
import updatePasswordSaga from './updatePasswordSaga';
import getAllJobSaga from './getAllJobSaga';

export default function* rootSaga() {
  yield all([
    fork(loginSaga),
    fork(signupSaga),
    fork(forgetPasswordSaga),
    fork(updatePasswordSaga),
    fork(getAllJobSaga),
  ]);
}