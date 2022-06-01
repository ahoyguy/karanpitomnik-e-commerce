import React from 'react'
import { useDispatch } from 'react-redux'
import { clearCart } from '../features/cart/cartSlice'
import { closeModal } from '../features/modals/modalSlice'


const ModalConfirm = () => {
    const dispatch = useDispatch()
  return (
    <div className="modal-wrapper">
        <div className="modal">
            <h4>Вы действительно хотите удалить товары из корзины?</h4>
            <div className="btn-container">
                <button className="btn btn-confirm" onClick={() => {
                    dispatch(clearCart())
                    dispatch(closeModal())
                }}>
                    Да
                </button>
                <button className="btn btn-cancel" onClick={() => dispatch(closeModal())}>
                    Нет
                </button>
            </div>
        </div>
    </div>
  )
}

export default ModalConfirm