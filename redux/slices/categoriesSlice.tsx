import { createSlice } from "@reduxjs/toolkit";
import { WritableDraft } from "immer/dist/internal.js";

interface Category {
  parent: string;
  name: string;
}

interface CategoriesStates {
  categories: Category[];
}

const initialState: CategoriesStates = {
  categories: [
    { parent: "root", name: "web" },
    { parent: "root", name: "algorithm" },
    { parent: "web", name: "react" },
    { parent: "react", name: "states" },
    { parent: "web", name: "vue" },
    { parent: "algorithm", name: "dfs" },
  ],
};

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    addCategory: (state, action) => {
      state.categories.push(action.payload.category);
    },
    removeCategory: (state, action) => {
      const name = action.payload.name;
      const parent = action.payload.parent;
      state.categories = state.categories.filter(
        (item) => item.name !== name && item.parent !== parent
      );
    },
  },
});

export const { addCategory } = categoriesSlice.actions;

export const selectCategories = (state: { categories: CategoriesStates }) =>
  state.categories.categories;

export default categoriesSlice.reducer;
