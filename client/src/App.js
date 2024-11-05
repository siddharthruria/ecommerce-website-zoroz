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

function App() {
  return (
    <>
      <Router>
        <UserProvider>
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
            <Route exact path="/product/id/:id" element={<ProductDetails />} />
          </Routes>
        </UserProvider>
      </Router>
    </>
  );
}

export default App;
