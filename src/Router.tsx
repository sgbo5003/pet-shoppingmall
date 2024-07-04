import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header.tsx";
import Home from "./components/Home.tsx";
import Login from "./components/Login.tsx";
import Join from "./components/Join.tsx";
import Admin from "./components/Admin.tsx";
import ProductDetail from "./components/product/ProductDetail.tsx";
import ScrollToTop from "./components/scrollToTop/index.ts";
import ProductCheckOut from "./components/product/ProductCheckOut.tsx";

const Router = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/join" element={<Join />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/product/:id/checkout" element={<ProductCheckOut />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
