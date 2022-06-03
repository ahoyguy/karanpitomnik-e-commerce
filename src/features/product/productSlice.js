import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import data from '../../assets/data/product.json'

const initialState = {
  productItems: data || [],
  sortedItems: data.products || [],
  priceList: data || [],
  isLoaded: true,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    productSort: (state, action) => {
      if (action.payload === "все растения") {
        state.sortedItems = state.productItems.products;
      } else {
        const sortedProducts = state.productItems.products.filter((item) => {
          const title = item.title;
          const tag = title.match(/([а-яА-Я]{1,})/i)[0];
          if (tag === action.payload) {
            return item;
          }
        });
        state.sortedItems = sortedProducts;
      }
    },
    sortPriceList: (state, action) => {
      if(action.payload === 'by name') {
        state.priceList.products.sort((a,b) => a.title.localeCompare(b.title))
      }
      if(action.payload === 'high price') {
        state.priceList.products.sort((a,b) => b.price - a.price)
      }
      if(action.payload === 'low price') {
        state.priceList.products.sort((a,b) => a.price - b.price)
      }
    }
  },
});

export const { addToCart, productSort, sortPriceList } = productSlice.actions;

export default productSlice.reducer;
