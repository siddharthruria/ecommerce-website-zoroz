import React from "react";
import "./global.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup";
import Navbar from "./components/Navbar";
import UserProvider from "./context/UserContext";
import Login from "./pages/Login";
import Home from "./pages/Home";
import CategoryProducts from "./pages/CategoryProducts";
import ProductDetails from "./pages/ProductDetails";
import CartProvider from "./context/CartContext";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Payment from "./pages/Payment";
import PaymentSuccess from "./pages/PaymentSuccess";
import PaymentFailure from "./pages/PaymentFailure";

function App() {
  return (
    <>
      <Router>
        <UserProvider>
          <CartProvider>
            <Navbar />
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/signup" element={<Signup />} />
              <Route exact path="/login" element={<Login />} />
              <Route
                exact
                path="/products/category/:category"
                element={<CategoryProducts />}
              />
              <Route
                exact
                path="/product/id/:id"
                element={<ProductDetails />}
              />
              <Route exact path="/cart" element={<Cart />} />
              <Route exact path="/checkout" element={<Checkout />} />
              <Route exact path="/payment" element={<Payment />} />
              <Route
                exact
                path="/payment/payment-success"
                element={<PaymentSuccess />}
              />
              <Route
                exact
                path="/payment/payment-failure"
                element={<PaymentFailure />}
              />
            </Routes>
          </CartProvider>
        </UserProvider>
      </Router>
    </>
  );
}

export default App;
