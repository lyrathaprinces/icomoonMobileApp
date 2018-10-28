import {createReducer} from 'reduxsauce';

import {ADD_TODO_ITEM} from '../actions/Types';

const INITIAL_STATE = {
  todoList: [],
};

const addTodoItems = (state= INITIAL_STATE, {payload}) => {
  return ({
    ...state,
    todoList: payload,
  });
};

const ACTION_HANDLERS = {
  [ADD_TODO_ITEM]: addTodoItems,
};

export default createReducer(INITIAL_STATE, ACTION_HANDLERS);
