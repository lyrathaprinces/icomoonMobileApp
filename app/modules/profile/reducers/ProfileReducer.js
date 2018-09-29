

// @flow

import {createReducer} from 'reduxsauce';
import {
  GET_ALL_PROFILE,
  GET_ALL_PROFILE_SUCCESS,
  GET_ALL_PROFILE_FAILURE,
} from '../actions/Types';

const INITIAL_STATE = {
  profileLoading: false,
  profileError: null,
  profile: null,
};

export const getAllProfile = (state: any = INITIAL_STATE, {payload}: any) => ({
  ...state,
  profileLoading: true,
});

export const getAllProfileSuccess = (state: any = INITIAL_STATE, {payload} : any) => {
  return ({
    ...state,
    profile: payload,
    profileLoading: false,
    profileError: null,
  });
};

export const getAllProfileFailure = (state: any = INITIAL_STATE, {payload} : any) => ({
  ...state,
  profileLoading: false,
  profileError: payload.error,
});

const ACTION_HANDLERS = {
  [GET_ALL_PROFILE]: getAllProfile,
  [GET_ALL_PROFILE_SUCCESS]: getAllProfileSuccess,
  [GET_ALL_PROFILE_FAILURE]: getAllProfileFailure,
};

export default createReducer(INITIAL_STATE, ACTION_HANDLERS);
