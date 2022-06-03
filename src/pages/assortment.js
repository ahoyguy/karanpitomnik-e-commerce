import React from "react";
import CartItem from "../components/CartItem";
import SEO from "../components/Helmet";
import { useDispatch, useSelector } from "react-redux";
import { productSort } from "../features/product/productSlice";
import sortTags from "../utils/sorting";

const Assortment = () => {
  const dispatch = useDispatch();
  const {
    sortedItems,
    productItems: { products: productNames },
  } = useSelector((state) => state.product);
  const products = sortedItems || [];
  const productTagNames = productNames.map(
    ({ title }) => title.match(/([а-яА-Я]{1,})/i)[0]
  );
  const tags = sortTags(productTagNames);
  if (products.lenght === 0) {
    return (
      <>
        <SEO title="Ассортимент" />
        <main className="main">
          <div className="container">
            <section className="assortment">
              <h1 className="title assortment__title">
                продуктов нет в наличии
              </h1>
            </section>
          </div>
        </main>
      </>
    );
  }
  return (
    <>
      <SEO title="Ассортимент" />
      <main className="main">
        <div className="container">
          <section className="assortment">
            <h1 className="title assortment__title">ассортимент</h1>
            <div className="assortment__body assortment-body">
              <div className="assortment-body__left">
                {products.map((item) => {
                  return <CartItem key={item.id} {...item} />;
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
    </>
  );
};

export default Assortment;
