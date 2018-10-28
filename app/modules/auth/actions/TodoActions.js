import {ADD_TODO_ITEM} from './Types';

const addTodoItem = (city: string) => ({
  type: ADD_TODO_ITEM,
  payload: {city},
});

export default {
  addTodoItem,
};
