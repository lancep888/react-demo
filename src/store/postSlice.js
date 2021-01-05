import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAllPosts = createAsyncThunk("posts/all", async () => {
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );
  return data;
});

const postSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: {
    [fetchAllPosts.pending]: (state) => {
      state.loading = true;
    },
    [fetchAllPosts.fulfilled]: (state, action) => {
      state.loading = false;
      state.posts = state.posts.concat(action.payload);
    },
    [fetchAllPosts.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },
  },
});

export default postSlice.reducer;
