import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "../pages/auth/SignUp";
import SignIn from "../pages/auth/SignIn";
import Layout from "../pages/user/layout/Layout";
import Home from "../pages/user/home/Home";
import ProductDetails from "../pages/user/product/ProductDetail";
import ProductCart from "../pages/user/cart/ShoppingCart";
import ShoppingCart from "../pages/user/cart/ShoppingCart";

const Router = () => {
  const product = {
    image: 'https://example.com/shoe.jpg',
    name: 'Classic Leather Loafers',
    price: 97.14,
    description: 'Featuring the original ripple design inspired by Japanese bullet trains, the Nike Air Max 97 lets you push your style full-speed ahead.',
    availableQuantity: 72,
  };

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<SignUp />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/" element={<Layout />}>
            <Route path="" element={<Home />} />
            <Route path="product-detail" element={<ProductDetails product={product} />} />
            <Route path="shopping-cart" element={<ShoppingCart />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
