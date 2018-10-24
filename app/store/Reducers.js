import {combineReducers} from 'redux';

import TodoReducer from './../modules/auth/screens/reducer/TodoReducer';

export default combineReducers({
  todo: TodoReducer,
});
