import { createSlice } from "@reduxjs/toolkit";


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
    toggleFavorite(state, action) {
      const todo = state.find((todo) => todo.id === action.payload.id);
      if (todo) {
        todo.favorite = !todo.favorite;
      }
    }, 
  },
});

export const { addTodo, toggleTodo, emptyAll, toggleFavorite } = todoSlice.actions;
export default todoSlice.reducer;
