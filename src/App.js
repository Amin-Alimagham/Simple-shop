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
import { Provider } from "react-redux";
import { initStore } from "./store/Store";
import CardListPage from "./components/CardListPage";

function App() {
  return (
    <Provider store={initStore}>
      <BrowserRouter>
        <CartProvider>
          <NavBar />
          <Routes>
            <Route path="*" element={<NotFound />} />
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Product />} />
            <Route path="productPage" element={<ProductPage />} />
            <Route path="/cardListPage" element={<CardListPage />} />
            <Route path="form" element={<Form />} />
          </Routes>
          <Footer />
        </CartProvider>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
