import React, { useContext, useMemo } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();

  const {
    cartItems,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    clearCart,
  } = useContext(CartContext);

  const totalPrice = useMemo(() => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  }, [cartItems]);

  const handleCheckout = () => {
    navigate("/checkout", { state: { totalPrice } });
    alert("Proceeding to checkout!");
    // clearCart();
  };

  return (
    <div className="cart-page">
      <h2>My Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul>
            {cartItems.map((item) => (
              <li
                key={item._id}
                className="d-flex cart-item"
                style={{ flexDirection: "row" }}
              >
                <div className="mt-5">
                  <img
                    style={{ height: "110px", width: "110px" }}
                    src={item.image}
                    alt={item.productName}
                  />
                  <h4>{item.productName}</h4>
                  <p>
                    Price: <b>Rs. {item.price}</b>
                  </p>
                  <p>
                    Quantity: <b>{item.quantity}</b>
                  </p>
                  <div>
                    <button onClick={() => decreaseQuantity(item._id)}>
                      -
                    </button>
                    <button onClick={() => increaseQuantity(item._id)}>
                      +
                    </button>
                    <button onClick={() => removeFromCart(item._id)}>
                      remove
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div
            className="d-flex"
            style={{ marginTop: "50px", marginLeft: "40px" }}
          >
            <h3>Total Price: Rs. {totalPrice.toFixed(2)}</h3>
            <button
              className="buttons btn btn-primary"
              style={{ marginLeft: "50px" }}
              onClick={handleCheckout}
            >
              checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
