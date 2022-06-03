import React from "react";
import CartProduct from "../components/CartProduct";
import SEO from "../components/Helmet";
import { curFormat } from "../utils/curencyFormat";
import { useDispatch, useSelector } from "react-redux";
import {
  openModal,
  paymentLoading,
  openPaymentModal,
} from "../features/modals/modalSlice";
import { clearCart } from "../features/cart/cartSlice";
import ModalConfirm from "../components/ModalConfirm";
import Loading from "../components/Loading";
import ModalPayment from "../components/ModalPayment";

const ProductCart = () => {
  const dispatch = useDispatch();
  const { isOpen, isOpenPayment, isLoadingPayment } = useSelector(
    (store) => store.modal
  );
  const { cartItems, totalAmount, totalPrice } = useSelector(
    (store) => store.cart
  );

  if (cartItems.length === 0) {
    return (
      <>
        <SEO title="Корзина" />
        <main className="main">
          <div className="container">
            <section className="cart-section">
              <h2>Корзина пуста</h2>
            </section>
          </div>
          {isOpenPayment ? <ModalPayment /> : null}
        </main>
      </>
    );
  }
  return (
    <>
      <SEO title="Корзина" />
      <main className="main">
        <div className="container">
          <section className="cart-section">
            <div className="cart-section__items">
              {cartItems.map((item) => {
                return <CartProduct key={item.id} {...item} />;
              })}
            </div>
            <div className="cart-section__items cart-section__items--totals">
              <div className="totals">
                <div className="totals__amount">
                  Итого количество: <span>{totalAmount} шт.</span>
                </div>
                <div className="totals__amount">
                  На сумму: <span>{curFormat(totalPrice)}</span>
                </div>
                <div className="totals__footer">
                  <button
                    className="btn totals__btn"
                    onClick={() => {
                      dispatch(paymentLoading());
                      setTimeout(() => {
                        dispatch(openPaymentModal());
                        dispatch(clearCart());
                      }, 3000);
                    }}
                  >
                    Оформить
                  </button>
                  <button
                    className="totals__clear-btn"
                    onClick={() => dispatch(openModal())}
                  >
                    Удалить все
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>
        {isOpen ? <ModalConfirm /> : null}
        {isLoadingPayment ? <Loading /> : null}
      </main>
    </>
  );
};

export default ProductCart;
