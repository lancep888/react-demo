import { createSlice } from "@reduxjs/toolkit";

const albumSlice = createSlice({
  name: "album",
  initialState: [
    {
      "userId": 1,
      "id": 1,
      "title": "quidem molestiae enim",
      "upvotes": 0,
      "downvotes": 0,
    },
    {
      "userId": 1,
      "id": 2,
      "title": "sunt qui excepturi placeat culpa",
      "upvotes": 0,
      "downvotes": 0,
    },
    {
      "userId": 1,
      "id": 3,
      "title": "omnis laborum odio",
      "upvotes": 0,
      "downvotes": 0,
    },
    {
      "userId": 1,
      "id": 4,
      "title": "non esse culpa molestiae omnis sed optio",
      "upvotes": 0,
      "downvotes": 0,
    },
    {
      "userId": 1,
      "id": 5,
      "title": "eaque aut omnis a",
      "upvotes": 0,
      "downvotes": 0,
    },
    {
      "userId": 1,
      "id": 6,
      "title": "natus impedit quibusdam illo est",
      "upvotes": 0,
      "downvotes": 0,
    },
    {
      "userId": 1,
      "id": 7,
      "title": "quibusdam autem aliquid et et quia",
      "upvotes": 0,
      "downvotes": 0,
    },
    {
      "userId": 1,
      "id": 8,
      "title": "qui fuga est a eum",
      "upvotes": 0,
      "downvotes": 0,
    },
    {
      "userId": 1,
      "id": 9,
      "title": "saepe unde necessitatibus rem",
      "upvotes": 0,
      "downvotes": 0,
    },
    {
      "userId": 1,
      "id": 10,
      "title": "distinctio laborum qui",
      "upvotes": 0,
      "downvotes": 0,
    }
  ],
  reducers: {
    addAlbum(state, action) {
      state.push(action.payload);
    },
    upvote(state, action) {
      const album = state.find((album) => album.id === action.payload);
      if (album) {
        album.upvotes++;
      }
    },
    downvote(state, action) {
      const album = state.find((album) => album.id === action.payload);
      if (album) {
        album.downvotes++;
      }
    },
    // toggleAlbum(state, action) {
    //   const album = state.find((album) => album.id === action.payload.id);
    //   if (album) {
    //     album.completed = !album.completed;
    //   }
    // },
  },
});

export const { addAlbum, upvote, downvote } = albumSlice.actions;
export default albumSlice.reducer;
