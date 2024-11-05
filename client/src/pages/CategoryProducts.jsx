import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const CategoryProducts = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          `http://localhost:5555/api/product/products?category=${category}`
        );
        const data = await response.json();
        if (data.success) {
          setProducts(data.products);
        }
      } catch (error) {
        console.error("error fetching products:", error);
      }
    };

    fetchProducts();
  }, [category]);

  return (
    <div>
      <h2>category: {category}</h2>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product._id} className="product-card">
            <Link to={`/product/id/${product._id}`}>
              <img
                style={{ height: "100%", width: "100%" }}
                src={product.image}
                alt={product.productname}
              />
              <h6 className="mt-4">{product.productName}</h6>
            </Link>
            <p>Rs.{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryProducts;
