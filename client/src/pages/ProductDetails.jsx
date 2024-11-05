import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await fetch(
          `https://ecommerce-zoroz-backend.onrender.com/api/product/?id=${id}`
        );
        const data = await response.json();
        console.log(data);
        if (data.success) {
          setProduct(data.product);
        }
      } catch (error) {
        console.error("error fetching product details.", error);
      }
    };

    fetchProductDetails();
  }, [id]);

  const handleAddToCart = () => {
    addToCart(product);
    alert(`${product.productName} has been added to the cart.`);
  };

  return (
    <div className="container mt-5">
      <h3>
        <u>{product?.productName}</u>
      </h3>
      <p>{product?.description}</p>
      Price - <b>Rs. {product?.price}</b>
      <br />
      <br />
      <img src={product?.image} alt={product?.productName} />
      <button style={{ marginLeft: "50px" }} onClick={handleAddToCart}>
        add to cart
      </button>
    </div>
  );
};

export default ProductDetails;
