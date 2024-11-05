import React from "react";
import { Link } from "react-router-dom";

const PaymentFailure = () => {
  return (
    <div className="payment-status-page">
      <h1>Payment Failed</h1>
      <p>Oops! Something went wrong with your payment. Please try again.</p>
      <Link to="/checkout" className="btn btn-warning mt-4">
        Try Again
      </Link>
      <Link to="/cart" className="btn btn-secondary mt-4">
        View Cart
      </Link>
    </div>
  );
};

export default PaymentFailure;
