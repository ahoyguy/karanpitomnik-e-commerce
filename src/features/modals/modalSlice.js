import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  isSend: false,
  isOpenPayment: false,
  isLoadingPayment: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.isOpen = true;
    },
    closeModal: (state, action) => {
      state.isOpen = false;
    },
    showMessage: (state, action) => {
      state.isSend = true;
    },
    hideMessage: (state, action) => {
      state.isSend = false;
    },
    paymentLoading: (state, action) => {
      state.isLoadingPayment = true;
      console.log("loading...");
    },
    openPaymentModal: (state,action) => {
        state.isOpenPayment = true;
        state.isLoadingPayment = false;
        console.log('loading id finished');
        console.log('payment is completed');
    },
    closePayment: (state, action) => {
        state.isOpenPayment = false;
    },
  },
});

export const {
  openModal,
  closeModal,
  showMessage,
  hideMessage,
  closePayment,
  paymentLoading,
  openPaymentModal
} = modalSlice.actions;

export default modalSlice.reducer;
