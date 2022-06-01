import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isOpen: false,
    isSend: false
}

const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        openModal: (state,action) => {
            state.isOpen = true
        },
        closeModal: (state,action) => {
            state.isOpen = false
        },
        showMessage: (state,action) => {
            state.isSend = true
        },
        hideMessage: (state, action) => {
            state.isSend = false
        }
    }
})

export const {openModal, closeModal, showMessage, hideMessage} = modalSlice.actions

export default modalSlice.reducer