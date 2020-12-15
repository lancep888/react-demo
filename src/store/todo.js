import { createAction, createReducer } from "@reduxjs/toolkit";

// Actions
export const addTodo = createAction("ADD_TODO");
export const toggleTodo = createAction("TOGGLE_TODO");

// Reducer
const reducer = createReducer([], {
  // computed property
  [addTodo]: (state, action) => {
    state.push(action.payload);
  },
  [toggleTodo]: (state, action) => {
    const todo = state.find((todo) => todo.id === action.payload.id);
    if (todo) {
      todo.completed = !todo.completed;
    }
  },
});

export default reducer;
