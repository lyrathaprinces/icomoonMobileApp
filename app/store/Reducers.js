import {combineReducers} from 'redux';

import TodoReducer from './../modules/auth/reducer/TodoReducer';

export default combineReducers({
  todo: TodoReducer,
});
