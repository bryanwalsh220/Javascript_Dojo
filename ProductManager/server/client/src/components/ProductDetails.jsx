import React, { useEffect, useState} from 'react';
import axios from 'axios';
import {useParams, Link} from 'react-router-dom'

function ProductDetails() {
  const [product, setProduct] = useState(null);
  const {id} = useParams();
  useEffect(() => {
    axios.get(`http://localhost:3000/api/products/${id}`)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((error) => {
        console.error('Error fetching product details:', error);
      });
  }, [id]);


  return (
    <div>
      {product ? (
        <div>
          <h2>{product.title}</h2>
          <p>Price: ${product.price}</p>
          <p>Description: {product.description}</p>
          <Link to={`/products/${product._id}/edit`}>Edit</Link>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
export default ProductDetails