// @flow
import {
  GET_LOGIN_VERIFICATION,
  GET_LOGIN_VERIFICATION_SUCCESS,
  GET_LOGIN_VERIFICATION_FAILURE,

} from './Types';

  // Wrap with Payload
const getLoginVerification = (email: string, password: string) => ({
  type: GET_LOGIN_VERIFICATION,
  payload: {
    email,
    password,
  },
});

const getLoginVerificationSuccess = (data: any) => ({
  type: GET_LOGIN_VERIFICATION_SUCCESS,
  payload: {
    data,
  },
});

const getLoginVerificationFailure = (error: any) => ({
  type: GET_LOGIN_VERIFICATION_FAILURE,
  payload: {
    error,
  },
});

export default {
  getLoginVerification,
  getLoginVerificationSuccess,
  getLoginVerificationFailure,
};

