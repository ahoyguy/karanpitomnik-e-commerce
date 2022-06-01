import React from "react";
import CartItem from "../components/CartItem";
import { useDispatch, useSelector } from "react-redux";
import { productSort } from "../features/product/productSlice";
import sortTags from "../utils/sorting";

const Assortment = () => {
  const dispatch = useDispatch();
  const { sortedItems, productItems } = useSelector((state) => state.product);
  const products = sortedItems || [];
  const productNames = productItems.map(
    ({ attributes: { title } }) => title.match(/([а-яА-Я]{1,})/i)[0]
  );
  const tags = sortTags(productNames);
  if (products.lenght === 0) {
    return (
      <main className="main">
        <div className="container">
          <section className="assortment">
            <h1 className="title assortment__title">продуктов нет в наличии</h1>
          </section>
        </div>
      </main>
    );
  }
  return (
    <main className="main">
      <div className="container">
        <section className="assortment">
          <h1 className="title assortment__title">ассортимент</h1>
          <div className="assortment__body assortment-body">
            <div className="assortment-body__left">
              {products.map((item) => {
                const { attributes: product, id } = item;
                return <CartItem key={id} {...product} id={id} />;
              })}
            </div>
            <div className="assortment-body__right tags">
              <div className="tags__container">
                <div className="tags__title">
                  <span>Поиск по тегам</span>
                </div>
                <div className="tags__wrapper">
                  {tags.map((tag, index) => {
                    return (
                      <button
                        className="btn tags__btn"
                        key={index}
                        onClick={() => dispatch(productSort(tag))}
                      >
                        {tag}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Assortment;
