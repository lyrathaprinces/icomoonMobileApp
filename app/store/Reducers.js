import {combineReducers} from 'redux';

import ProfileReducer from './../modules/profile/reducers/ProfileReducer';

export default combineReducers({
  Profile: ProfileReducer,
});
