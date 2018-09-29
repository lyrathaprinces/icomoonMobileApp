import {createReducer} from 'reduxsauce';
import {
  GET_LOGIN_VERIFICATION,
  GET_LOGIN_VERIFICATION_SUCCESS,
  GET_LOGIN_VERIFICATION_FAILURE,

  PLAYER_REGISTRATION,
  PLAYER_REGISTRATION_SUCCESS,
  PLAYER_REGISTRATION_FAILURE,
  RESET_PLAYER_REGISTRATION_DATA,
} from '../actions/Types';
import {
  SIGN_OUT_SUCCESS,
} from '@spotme-shared/actions/Types';

const INITIAL_STATE = {
  data: {},
  error: null,

  playerRegistrationLoading: false,
  playerRegistrationData: null,
  playerRegistrationError: null,
};

export const getLoginVerification = (state = INITIAL_STATE, {payload} : any) => ({
  ...state,
  isLoading: true,
});

export const getLoginVerificationSuccess = (state = INITIAL_STATE, {payload} : any) => ({
  ...state,
  data: payload.data,
  isLoading: false,
});

export const getLoginVerificationFailure = (state, {payload} : any) => ({
  ...state,
  error: payload.error,
  isLoading: false,
});

export const signOutSuccess = (state: any = INITIAL_STATE) => ({
  ...state,

  error: null,
  data: {},
  playerRegistrationData: null,
});

export const playerRegistration = (state: any = INITIAL_STATE, {payload}: any) => ({
  ...state,
  playerRegistrationLoading: true,
});

export const playerRegistrationSuccess = (state: any = INITIAL_STATE, {payload}: any) => ({
  ...state,
  playerRegistrationData: payload.data,
  playerRegistrationLoading: false,
  playerRegistrationError: null,
});

export const playerRegistrationFailure = (state: any = INITIAL_STATE, {payload}: any) => ({
  ...state,
  playerRegistrationError: payload.error.response,
  playerRegistrationLoading: false,
});

export const resetPlayerRegistrationData = (state: any = INITIAL_STATE, {payload}: any) => ({
  ...state,
  playerRegistrationData: null,
  playerRegistrationError: null,
  playerRegistrationLoading: false,
});

const ACTION_HANDLERS = {
  [GET_LOGIN_VERIFICATION]: getLoginVerification,
  [GET_LOGIN_VERIFICATION_SUCCESS]: getLoginVerificationSuccess,
  [GET_LOGIN_VERIFICATION_FAILURE]: getLoginVerificationFailure,

  [SIGN_OUT_SUCCESS]: signOutSuccess,

  [PLAYER_REGISTRATION]: playerRegistration,
  [PLAYER_REGISTRATION_SUCCESS]: playerRegistrationSuccess,
  [PLAYER_REGISTRATION_FAILURE]: playerRegistrationFailure,

  [RESET_PLAYER_REGISTRATION_DATA]: resetPlayerRegistrationData,
};

export default createReducer(INITIAL_STATE, ACTION_HANDLERS);
