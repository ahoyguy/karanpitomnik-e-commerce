import React from "react";
import { curFormat } from "../utils/curencyFormat";
import Icons from '../assets/images/icons.svg'
import { toggleAmount, removeItem } from "../features/cart/cartSlice";
import { useDispatch } from "react-redux";

const CartProduct = ({ id, title, subtitle, price, cartImg, amount }) => {
  const dispatch = useDispatch();
  return (
    <article className="cart-product">
      <div className="cart-product__image">
        <img src={`http://localhost:1337${cartImg}`} alt={title} />
      </div>
      <div className="cart-product__title">
        <h4>{title}</h4>
        <h5>{subtitle}</h5>
      </div>
      <div className="cart-product__center control">
        <button
          className="control__btn"
          onClick={() => {
            if (amount === 1) {
              dispatch(removeItem(id));
              return
            } else {
              dispatch(
                toggleAmount({
                  type: "dec",
                  id,
                })
              );
            }
          }}
        >
          -
        </button>
        <span>{amount}</span>
        <button
          className="control__btn"
          onClick={() => {
            dispatch(
              toggleAmount({
                type: "inc",
                id,
              })
            );
          }}
        >
          +
        </button>
      </div>
      <div className="cart-product__right">
        <span className="cart-product__price">{curFormat(price)}</span>
      </div>
      <span className="cart-product__trash" onClick={() => dispatch(removeItem(id))}>
          <svg>
            <use xlinkHref={`${Icons}#icon-trash`}/>
          </svg>
      </span>
    </article>
  );
};

export default CartProduct;
