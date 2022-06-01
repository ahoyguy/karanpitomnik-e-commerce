import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  totalAmount: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload;
      state.cartItems.push(newItem);
    },
    toggleAmount: (state, { payload }) => {
      if (payload.type === "inc") {
        state.cartItems.find((item) => {
          if (item.id === payload.id) {
            item.amount = item.amount + 1;
          }
        });
      }
      if (payload.type === "dec") {
        state.cartItems.find((item) => {
          if (item.id === payload.id) {
            item.amount = item.amount - 1;
          }
        });
      }
    },
    removeItem: (state, action) => {
      const newCart = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
      state.cartItems = newCart;
    },
    clearCart: (state) => {
      state.cartItems = [];
    },
    getTotals: (state) => {
      const { totalAmount, totalPrice } = state.cartItems.reduce(
        (total, item) => {
          const { amount, price } = item;
          const totalItemPrice = parseFloat(amount * price);
          total.totalAmount += amount;
          total.totalPrice += totalItemPrice;
          return total;
        },
        {
          totalAmount: 0,
          totalPrice: 0,
        }
      );
      state.totalPrice = totalPrice;
      state.totalAmount = totalAmount;
    },
  },
});

export const { addToCart, toggleAmount, removeItem, clearCart, getTotals } =
  cartSlice.actions;

export default cartSlice.reducer;
