import React from "react";
import { Link } from "react-router-dom";
import Favorite from "./Favorite";
import Icons from "../assets/images/icons.svg";
import { curFormat } from "../utils/curencyFormat";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";

const CartItem = ({ id, title, subtitle, price, image, amount }) => {
  const dispatch = useDispatch();
  const slug = subtitle.replace(/\s/g, "-").replace(/("|')/g, "").toLowerCase();
  const cartItem = useSelector((store) =>
    store.cart.cartItems.find((item) => item.id === id)
  );
  const [inCart, setInCart] = React.useState(
    cartItem ? cartItem.inCart : false
  );

  return (
    <article className="cart-item">
      <div className="cart-item__image">
        <img
          src={image}
          alt={title}
        />
        <Favorite parentClass="cart-item" id={id} title={title} slug={slug} />
        <Link to={`/details/${slug}`}>
          <span className="cart-item__details">
            <svg>
              <use xlinkHref={`${Icons}#icon-search`} />
            </svg>
          </span>
        </Link>
      </div>
      <div className="cart-item__info item-info">
        <div className="item-info__header">
          <h4 className="item-info__title">{title}</h4>
          <h5 className="item-info__subtitle">{subtitle}</h5>
        </div>
        <div className="item-info__footer">
          <span className="item-info__price">{curFormat(price)}</span>
          <button
            className="btn item-info__btn"
            onClick={() => {
              setInCart(!inCart);
              dispatch(
                addToCart({
                  id,
                  title,
                  subtitle,
                  price,
                  image,
                  amount,
                  inCart: true,
                })
              );
            }}
            disabled={inCart ? true : false}
          >
            {inCart ? "В корзине" : "Добавить в корзину"}
          </button>
        </div>
      </div>
    </article>
  );
};

export default CartItem;
