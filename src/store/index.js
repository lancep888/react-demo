import { configureStore } from "@reduxjs/toolkit";
import reducer from "./todo";
import todoSliceReducer from "./todoSlice";

const store = configureStore({
  reducer: todoSliceReducer,
});

export default store;
