import { createSlice } from "@reduxjs/toolkit";

immer;

const todoSlice = createSlice({
  name: "todo",
  initialState: [],
  reducers: {
    addTodo(state, action) {
      state.push(action.payload);
    },
    toggleTodo(state, action) {
      const todo = state.find((todo) => todo.id === action.payload.id);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    emptyAll(state) {
      state.splice(0, state.length);
    },
  },
});

export const { addTodo, toggleTodo, emptyAll } = todoSlice.actions;
export default todoSlice.reducer;
