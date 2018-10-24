import {ADD_TODO_ITEM, DELETE_TODO_ITEM, EDIT_TODO_ITEM} from './Types';

const addTodoItem = (city: string) => ({
  type: ADD_TODO_ITEM,
  payload: {city},
});

const deleteItem = (index: number) => ({
  type: DELETE_TODO_ITEM,
  payload: {index},
});

const editItem = (index: number, editedItem: String) => ({
  type: EDIT_TODO_ITEM,
  payload: {index, editedItem},

});

export default {
  addTodoItem,
  deleteItem,
  editItem,
};
