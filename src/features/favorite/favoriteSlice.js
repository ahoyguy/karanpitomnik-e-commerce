import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favoriteProducts: [],
};

const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    addToFavorite: (state, action) => {
      state.favoriteProducts.push(action.payload);
    },
    deleteFromFavorite: (state, action) => {
      const filterProducts = state.favoriteProducts.filter(
        (item) => item.id !== action.payload
      );
      state.favoriteProducts = filterProducts;
    },
    hideToolTip: (state, action) => {
      const newFavoriteProducts = state.favoriteProducts.filter((item) => {
        if (item.id === action.payload) {
          item.isNew = false;
        }
        return item;
      });
      state.favoriteProducts = newFavoriteProducts;
    },
  },
});

export const { addToFavorite, deleteFromFavorite, showToolTip, hideToolTip } =
  favoriteSlice.actions;

export default favoriteSlice.reducer;
