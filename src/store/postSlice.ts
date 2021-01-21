import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// export const fetchAllPosts = createAsyncThunk("posts/all", async () => {
//   const { data } = await axios.get(
//     "https://jsonplaceholder.typicode.com/posts"
//   );
//   return data;
// });

export interface PostProps {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface PostSliceState {
  posts: PostProps[];
  loading: boolean;
  error: any;
}

const postSlice = createSlice({
  name: "posts",
  initialState: { posts: [], loading: false, error: null } as PostSliceState,
  reducers: {
    addPosts(state, action) {
      state.posts = state.posts.concat(action.payload);
    },
  },
  // according to the documentation: https://redux-toolkit.js.org/usage/usage-with-typescript
  // extraReducers: (builder) => {
  //   builder.addCase(fetchAllPosts.pending, (state) => {
  //     state.loading = true;
  //   });
  //   builder.addCase(fetchAllPosts.fulfilled, (state, action) => {
  //     state.loading = false;
  //     state.posts = state.posts.concat(action.payload);
  //   });
  //   builder.addCase(fetchAllPosts.rejected, (state, action) => {
  //     state.loading = false;
  //     state.error = action.error;
  //   });
  // },
});

export const { addPosts } = postSlice.actions;
export default postSlice.reducer;
