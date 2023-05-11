import React from "react";
import "./style/app.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import Product from "./components/products";
import ProductPage from "./components/productPage";
import Form from "./components/form";
import NotFound from "./components/notFound";
import Footer from "./components/footer";
import NavBar from "./components/navBar";
import { CartProvider } from "./context";

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <NavBar />
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Home />} />
          <Route path="products" element={<Product />} />
          <Route path="productPage" element={<ProductPage />} />
          <Route path="form" element={<Form />} />
        </Routes>
        <Footer />
      </CartProvider>
    </BrowserRouter>
  );
}
//
export default App;
