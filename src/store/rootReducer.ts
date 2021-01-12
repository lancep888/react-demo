import { combineReducers } from "@reduxjs/toolkit";
import todoSlice from "./todoSlice";
import postSlice from "./postSlice";

const rootReducer = combineReducers({
  todos: todoSlice,
  posts: postSlice,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
