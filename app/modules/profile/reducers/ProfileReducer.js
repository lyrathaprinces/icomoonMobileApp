
// flow
import {createReducer} from 'reduxsauce';
import {
  GET_ALL_PROFILE,
//   GET_ALL_PROFILE_FAILURE,
//   GET_ALL_PROFILE_SUCCESS,
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

const ACTION_HANDLERS = {
  [GET_ALL_PROFILE]: getAllProfile,
};

export default createReducer(INITIAL_STATE, ACTION_HANDLERS);
