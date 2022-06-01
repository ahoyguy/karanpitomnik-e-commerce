import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const url = "http://localhost:1337/api/trees/?populate=*";

const initialState = {
  productItems: [],
  sortedItems: [],
  priceList: [],
  isLoaded: true,
};

export const getAllItems = createAsyncThunk(
  "product/getAllItems",
  async (name, thunkAPI) => {
    try {
      const res = await axios(url);
      return res.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("что-то пошло не так");
    }
  }
);

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    productSort: (state, action) => {
      if (action.payload === "все растения") {
        state.sortedItems = state.productItems;
      } else {
        const sortedProducts = state.productItems.filter((item) => {
          const title = item.attributes.title;
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
        state.priceList.sort((a,b) => a.attributes.title.localeCompare(b.attributes.title))
      }
      if(action.payload === 'high price') {
        state.priceList.sort((a,b) => b.attributes.price - a.attributes.price)
      }
      if(action.payload === 'low price') {
        state.priceList.sort((a,b) => a.attributes.price - b.attributes.price)
      }
    }
  },
  extraReducers: {
    [getAllItems.pending]: (state) => {
      state.isLoaded = true;
    },
    [getAllItems.fulfilled]: (state, action) => {
      state.isLoaded = false;
      state.productItems = action.payload;
      state.sortedItems = state.productItems;
      state.priceList = state.productItems;
    },
    [getAllItems.rejected]: (state, action) => {
      state.isLoaded = false;
    },
  },
});

export const { addToCart, productSort, sortPriceList } = productSlice.actions;

export default productSlice.reducer;
