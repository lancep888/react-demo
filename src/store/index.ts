import { configureStore } from "@reduxjs/toolkit";
import reducer from "./todo";
import todoSliceReducer from "./todoSlice";
import postsReducer from "./postSlice";
import rootReducer from "./rootReducer";
import createSagaMiddleware from "redux-saga";
import { watchGetPosts } from "../saga/postSaga";
import rootSaga from "../saga/rootSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false, serializableCheck: false }).concat(
      sagaMiddleware
    ),
});

sagaMiddleware.run(rootSaga);

export default store;
