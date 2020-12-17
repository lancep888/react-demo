import { combineReducers } from "@reduxjs/toolkit";
import albumSlice from "./albumSlice";
import todoSlice from "./todoSlice";

const rootReducer = combineReducers({
    album: albumSlice,
    todo: todoSlice,
});


export default rootReducer;
