import React from "react";
import Nav from "./Nav";
import { Link } from "react-router-dom";
import Icon from "../assets/images/icons.svg";
import { useSelector } from "react-redux";
import Tooltip from "./Tooltip";

const Header = () => {
  const [showFavorite, setShowFavorite] = React.useState(false);
  const { totalAmount } = useSelector((store) => store.cart);
  const { favoriteProducts } = useSelector((store) => store.favorite);
  const isNew = favoriteProducts.find((item) => item.isNew === true) || false;
  return (
    <header className="header">
      <div className="container header__container">
        <Link to="/">
          <div className="header__logo">
            <svg>
              <use xlinkHref={`${Icon}#icon-logo`} />
            </svg>
          </div>
        </Link>
        <nav className="header__nav nav">
          <Nav navClass="nav" />
        </nav>
        <div className="header__right">
          <div className="header__favorite header-favorite">
            {isNew ? <Tooltip parentClass="header-favorite" /> : null}
            <button
              className={
                showFavorite
                  ? "header-favorite__btn active"
                  : "header-favorite__btn"
              }
              onClick={() => setShowFavorite(!showFavorite)}
            >
              {showFavorite ? (
                <svg>
                  <use xlinkHref={`${Icon}#icon-favorite-fill`} />
                </svg>
              ) : (
                <svg>
                  <use xlinkHref={`${Icon}#icon-favorite-stroke`} />
                </svg>
              )}
              <span>{favoriteProducts.length}</span>
            </button>
            <ul className="header-favorite__list">
              {favoriteProducts.length > 0 ? (
                favoriteProducts.map((item, index) => {
                  return (
                    <li
                      className={
                        showFavorite
                          ? "header-favorite__item header-favorite__item--active"
                          : "header-favorite__item"
                      }
                      key={index}
                    >
                      <Link to={`/details/${item.slug}`}>{item.title}</Link>
                    </li>
                  );
                })
              ) : (
                <li
                  className={
                    showFavorite
                      ? "header-favorite__item header-favorite__item--active"
                      : "header-favorite__item"
                  }
                >
                  <p>Любимые товары еще не выбраны</p>
                </li>
              )}
            </ul>
          </div>
          <Link to="/product-cart">
            <div className="header__cart cart-button">
              <div className="cart-button__icon">
                <svg>
                  <use xlinkHref={`${Icon}#icon-cart`} />
                </svg>
              </div>
              <span className="cart-button__amount">{totalAmount}</span>
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
