import React from "react";
import { Link } from "react-router-dom";

const PaymentSuccess = () => {
  return (
    <div className="payment-status-page">
      <h1>Payment Successful!</h1>
      <p>
        Thank you for your purchase! Your order has been placed successfully.
      </p>
      <Link to="/" className="btn btn-primary mt-4">
        Go to Home
      </Link>
      <Link to="/cart" className="btn btn-secondary mt-4">
        View Cart
      </Link>
    </div>
  );
};

export default PaymentSuccess;
