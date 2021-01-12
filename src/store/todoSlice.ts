import { createSlice } from "@reduxjs/toolkit";

export interface TodoSliceProps {
  id: number;
  todo: string;
  completed: boolean;
  favorite: boolean;
}

const todoSlice = createSlice({
  name: "todo",
  initialState: [] as TodoSliceProps[],
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

export const {
  addTodo,
  toggleTodo,
  emptyAll,
  toggleFavorite,
} = todoSlice.actions;
export default todoSlice.reducer;
