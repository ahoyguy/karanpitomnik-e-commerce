import React from "react";
import {Link} from 'react-router-dom'
import { useDispatch } from "react-redux";
import { closePayment } from "../features/modals/modalSlice";

const ModalPayment = () => {
  const dispatch = useDispatch();
  return (
    <div className="modal-wrapper">
      <div className="modal">
        <h4>Спасибо за покупку!</h4>
        <Link to='/' className="btn modal__link" onClick={() => dispatch(closePayment())}>Вернуться на главную</Link>
      </div>
    </div>
  );
};

export default ModalPayment;
