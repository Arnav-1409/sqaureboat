const APP_ACTIONS = {
  CONFIG_LOADED: 'CONFIG_LOADED'
}

const LOGIN_ACTIONS = {
  SEND_LOGIN_REQUEST: 'SEND_LOGIN_REQUEST',
  FETCH_LOGIN_SUCCESS: 'FETCH_LOGIN_SUCCESS',
  FETCH_LOGIN_ERROR: 'FETCH_LOGIN_ERROR',
  CLEAR_LOGIN_NOTIFICATINS: 'CLEAR_LOGIN_NOTIFICATINS',
  CLEAR_LOGIN_SUCCESS_NOTIFICATINS: 'CLEAR_LOGIN_SUCCESS_NOTIFICATINS'
}

const SIGNUP_ACTIONS = {
  SEND_SIGNUP_REQUEST: 'SEND_SIGNUP_REQUEST',
  FETCH_SIGNUP_SUCCESS: 'FETCH_SIGNUP_SUCCESS',
  FETCH_SIGNUP_ERROR: 'FETCH_SIGNUP_ERROR',
  CLEAR_SIGNUP_NOTIFICATINS: 'CLEAR_SIGNUP_NOTIFICATINS',
  CLEAR_SIGNUP_SUCCESS_NOTIFICATINS: 'CLEAR_SIGNUP_SUCCESS_NOTIFICATINS'
}

const FORGET_PASSWORD_ACTIONS = {
  SEND_FORGET_PASSWORD_REQUEST: 'SEND_FORGET_PASSWORD_REQUEST',
  FETCH_FORGET_PASSWORD_SUCCESS: 'FETCH_FORGET_PASSWORD_SUCCESS',
  FETCH_FORGET_PASSWORD_ERROR: 'FETCH_FORGET_PASSWORD_ERROR',
}

const UPDATE_PASSWORD_ACTIONS = {
  SEND_UPDATE_PASSWORD_REQUEST: 'SEND_UPDATE_PASSWORD_REQUEST',
  FETCH_UPDATE_PASSWORD_SUCCESS: 'FETCH_UPDATE_PASSWORD_SUCCESS',
  FETCH_UPDATE_PASSWORD_ERROR: 'FETCH_UPDATE_PASSWORD_ERROR',
}

const GET_ALL_JOB_ACTIONS = {
  SEND_ALL_JOB_REQUEST: 'SEND_ALL_JOB_REQUEST',
  FETCH_ALL_JOB_SUCCESS: 'FETCH_ALL_JOB_SUCCESS',
  FETCH_ALL_JOB_ERROR: 'FETCH_ALL_JOB_ERROR',
}

export default {
  ...APP_ACTIONS, ...LOGIN_ACTIONS, ...SIGNUP_ACTIONS, ...FORGET_PASSWORD_ACTIONS, ...UPDATE_PASSWORD_ACTIONS, ...GET_ALL_JOB_ACTIONS,
}