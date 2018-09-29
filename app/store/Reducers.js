// @flow
import {combineReducers} from 'redux';

import LoginReducer from '../modules/login/reducer/loginReducer';

export default combineReducers({
  login: LoginReducer,
});
