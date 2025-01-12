import React from "react";
import SEO from "./Helmet";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import Favorite from "./Favorite";
import { curFormat } from "../utils/curencyFormat";
import { addToCart } from "../features/cart/cartSlice";

const SingleProduct = ({ products: { products }, cartItems }) => {
  const dispatch = useDispatch();
  const { slug } = useParams();
  const titleID = slug.replace(/\-/gi, " ");
  if (products.length === 0) {
    return;
  }
  const product = products.find((item) => {
    const { subtitle } = item;
    if (subtitle.toLowerCase() === titleID) {
      return item;
    }
  });
  const { title, subtitle, desc, image, price, amount } = product;
  const { id } = product;
  const inCard =
    cartItems.length > 0 ? cartItems.find((item) => item.id === id) : false;
  return (
    <>
      <SEO title={title} desc={desc}/>
      <main className="main">
        <div className="container">
          <section className="product-section">
            <article className="product">
              <div className="product__image">
                <img src={image} alt={title} />
              </div>
              <div className="product__info">
                <div className="product__title">
                  <h2>{title}</h2>
                  <h3>{subtitle}</h3>
                </div>
                <div className="product__descr">
                  <p>{desc}</p>
                </div>
                <div className="product__footer">
                  <span className="product__price">{curFormat(price)}</span>
                  <button
                    className="btn product__btn"
                    disabled={inCard ? true : false}
                    onClick={() =>
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
                      )
                    }
                  >
                    {inCard ? "В корзине" : "Добавить в корзину"}
                  </button>
                </div>
                <Favorite parentClass="product" id={id} title={title} />
              </div>
            </article>
          </section>
        </div>
      </main>
    </>
  );
};

export default SingleProduct;
