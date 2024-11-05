import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Checkout = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { totalPrice } = location.state;

  const [address, setAddress] = useState({
    name: "",
    address: "",
    city: "",
    postalCode: "",
    country: "",
  });

  const handleProceedToPayment = (e) => {
    e.preventDefault();
    navigate("/payment", { state: { address, totalPrice } });
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    setAddress((prevAddress) => ({ ...prevAddress, [name]: value }));
  };

  return (
    <div className="checkout-page container position-relative">
      <h2>Checkout</h2>
      <form className="py-5 my-4" onSubmit={handleProceedToPayment}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={address.name}
            onChange={onChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="address" className="form-label">
            address
          </label>
          <input
            type="text"
            className="form-control"
            id="address"
            name="address"
            value={address.address}
            onChange={onChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="city" className="form-label">
            city
          </label>
          <input
            type="text"
            className="form-control"
            id="city"
            name="city"
            value={address.city}
            onChange={onChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="postalCode" className="form-label">
            postal code
          </label>
          <input
            type="text"
            className="form-control"
            id="postalCode"
            name="postalCode"
            value={address.postalCode}
            onChange={onChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="country" className="form-label">
            country
          </label>
          <input
            type="text"
            className="form-control"
            id="country"
            name="country"
            value={address.country}
            onChange={onChange}
            required
          />
        </div>
        <div className="d-flex justify-content-center">
          <button type="submit" className="buttons btn btn-primary mt-4">
            <h5>Total Price: Rs.{totalPrice.toFixed(2)}</h5>
            Proceed to Payment
          </button>
        </div>
      </form>
    </div>
  );
};

export default Checkout;
