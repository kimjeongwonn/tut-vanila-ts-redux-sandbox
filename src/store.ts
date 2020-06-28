import { createStore, Reducer } from 'redux';
import { createAction, createReducer } from '@reduxjs/toolkit';

const addTodo = createAction('ADD_TODO');
const deleteTodo = createAction('DELETE_TODO');

const reducer = createReducer([], {
  [addTodo]: (state, action) => {
    state.unshift({ todo: action.payload, id: Date.now() });
  },
  [deleteTodo]: (state, action) =>
    state.filter(({ id }) => id !== action.payload)
});
const store = createStore(reducer);

export const actionCreator = {
  addTodo,
  deleteTodo
};
export default store;
