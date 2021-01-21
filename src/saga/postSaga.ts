import { all, put, takeEvery } from "redux-saga/effects";
import axios from "axios";
import { addPosts } from "../store/postSlice";
import { ADD_POST_SAGA } from "./postSagaActions";

function* getPosts() {
  const { data } = yield axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );
  yield put(addPosts(data));
}

export function* watchGetPosts() {
  yield takeEvery(ADD_POST_SAGA, getPosts);
}
