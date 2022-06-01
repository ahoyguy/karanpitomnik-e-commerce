import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./assets/scss/index.scss";
import Home from "./pages/home";
import Assortment from "./pages/assortment";
import ProductCart from "./pages/productCart";
import Contacts from "./pages/contacts";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PriceList from "./pages/priceList";
import SingleProduct from "./components/SingleProduct";
import FailPage from "./pages/404";
import { getAllItems } from "./features/product/productSlice";
import { getTotals } from "./features/cart/cartSlice";
import {useDispatch, useSelector} from 'react-redux'

function App() {
  const dispatch = useDispatch()
  const {cartItems} = useSelector(store => store.cart)
  const {productItems} = useSelector(store => store.product)
  useEffect(() => {
    dispatch(getAllItems())
  },[])

  useEffect(() => {
    dispatch(getTotals())
  },[cartItems])
  
  return (
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/assortment" element={<Assortment />} />
          <Route path="/product-cart" element={<ProductCart />} />
          <Route path="/price-list" element={<PriceList />} />
          <Route path="/details/:slug" element={<SingleProduct products={productItems} cartItems={cartItems}/>} />
          <Route path="*" element={<FailPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
  );
}

export default App;
