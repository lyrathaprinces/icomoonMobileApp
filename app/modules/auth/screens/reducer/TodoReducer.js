import {createReducer} from 'reduxsauce';

import {ADD_TODO_ITEM, DELETE_TODO_ITEM, EDIT_TODO_ITEM} from '../actions/Types';

const INITIAL_STATE = {
  todoList: [],
};

const addTodoItems = (state= INITIAL_STATE, {payload}) => {
  const previousState = {...state};
  const currentTodoList = previousState.todoList;
  currentTodoList.push(payload);

  return ({
    ...state,
    todoList: currentTodoList,
  });
};

const deleteTodoItem = (state = INITIAL_STATE, {payload}) => {
  const previousState = {...state};
  const currentTodoList = previousState.todoList;
  currentTodoList.splice(payload.index, 1);

  return ({
    ...state,
    todoList: currentTodoList,
  });
};

const editTodoItem = (state = INITIAL_STATE, {payload}) => {
  const previousState = {...state};
  const currentTodoList = previousState.todoList;
  currentTodoList[payload.index] = {id: payload.index, city: payload.editedItem};

  return ({
    ...state,
    todoList: currentTodoList,
  });
};

const ACTION_HANDLERS = {
  [ADD_TODO_ITEM]: addTodoItems,
  [DELETE_TODO_ITEM]: deleteTodoItem,
  [EDIT_TODO_ITEM]: editTodoItem,
};

export default createReducer(INITIAL_STATE, ACTION_HANDLERS)
;
