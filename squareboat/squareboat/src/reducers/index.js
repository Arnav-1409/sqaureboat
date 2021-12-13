import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import appReducer from './appReducer';
import signupReducer from './signupReducer';
import forgetPasswordReducer from './forgetPasswordReducer';
import updatePasswordReducer from './updatePasswordReducer';
import getAllJobReducer from './getAllJobReducer';

export default combineReducers({
  loginReducer, appReducer, signupReducer, forgetPasswordReducer, updatePasswordReducer, getAllJobReducer
})