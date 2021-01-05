import { configureStore } from "@reduxjs/toolkit";
import reducer from "./todo";
import todoSliceReducer from "./todoSlice";
import postsReducer from "./postSlice";
import rootReducer from "./rootReducer";

const store = configureStore({
  reducer: rootReducer,
});

export default store;
