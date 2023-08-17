import { configureStore } from "@reduxjs/toolkit";

import usersReducer from "./slices/usersSlice";
import postsReducer from "./slices/postsSlice";
import categoriesReducer from "./slices/categoriesSlice";

const store = configureStore({
  reducer: {
    users: usersReducer,
    posts: postsReducer,
    categories: categoriesReducer,
  },
});

export default store;
