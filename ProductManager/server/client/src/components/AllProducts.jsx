import React, { useEffect, useState } from "react";
import axios from "axios";

function AllProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/products")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  const handleDelete = (productId) => {
    axios.delete(`http://localhost:3000/api/products/${productId}`)
    .then(() => {
    setProducts((prevProducts) => {
        return prevProducts.filter((product) => product._id !== productId)
    });
})
    .catch((err) => {
        console.error("error deleting product", err)
    });
  }

  return (
    <div>
      <h2>All Products</h2>
      <ul>
        {products.map((product) => (
          <li key={product._id}>
            <a href={`/products/${product._id}`}>{product.title}</a>
            <button onClick={() => handleDelete(product._id)}>Delete!</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AllProducts
