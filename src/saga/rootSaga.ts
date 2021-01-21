import { all } from "redux-saga/effects";
import { watchGetPosts } from "./postSaga";

export default function* rootSaga() {
  yield all([watchGetPosts()]);
}
