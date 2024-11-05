import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await fetch(
          `http://localhost:5555/api/product/?id=${id}`
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
    </div>
  );
};

export default ProductDetails;
