import { createSlice } from "@reduxjs/toolkit";

interface Post {
  id: number;
  title: string;
  body: string;
}

interface PostsState {
  posts: Post[];
}

const initialState: PostsState = {
  posts: [
    {
      id: 0,
      title: "dog bark enough",
      body: "dog usually bark when they see stranger, but if they bark too much, it is not good for their health",
    },
    {
      id: 1,
      title: "the best food for programmer",
      body: "the best food for programmer is pizza, because it is easy to eat and it is delicious",
    },
    {
      id: 2,
      title: "night coding",
      body: "coding at night is not good for your health, you should sleep early",
    },
  ],
};

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPost: (state, action) => {
      state.posts.push(action.payload);
    },
  },
});

export const { addPost } = postsSlice.actions;

export const selectPosts = (state: { posts: PostsState }) => state.posts.posts;

export default postsSlice.reducer;
