import React from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";

const PaymentPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { address, totalPrice } = location.state;

  const handlePayment = (success) => {
    if (success) {
      navigate("/payment-success");
    } else {
      navigate("/payment-failure");
    }
  };

  return (
    <div className="payment-page container position-relative">
      <h2>Payment</h2>
      <div className="address-summary" style={{ marginTop: "50px" }}>
        <h4 style={{ marginBottom: "30px" }}>Shipping Address</h4>
        <p>Name: {address?.name}</p>
        <p>Address: {address?.address}</p>
        <p>City: {address?.city}</p>
        <p>Postal Code: {address?.postalCode}</p>
        <p>Country {address?.country}</p>
      </div>
      <Link
        to="/payment/payment-success"
        className="buttons btn btn-primary mt-4"
        onClick={() => handlePayment(true)}
      >
        <h5>Rs.{totalPrice.toFixed(2)}</h5>
        Pay
      </Link>
      <Link
        to="/payment/payment-failure"
        className="buttons btn btn-primary mt-4"
        onClick={() => handlePayment(false)}
        style={{ marginLeft: "20px" }}
      >
        Cancel Payment
      </Link>
    </div>
  );
};

export default PaymentPage;
