import React, {useState, useEffect} from 'react'
import axios from 'axios';
import {useParams, useNavigate} from 'react-router-dom'

function EditProductForm() {
    const {id} = useParams();
  const[product, setProduct] = useState({
    title: '',
    price: '',
    description: ''
  });

  useEffect(() => {
    axios.get(`http://localhost:3000/api/products/${id}`)
    .then((res) => {
        setProduct(res.data);
    })
    .catch((err) => {
        console.error("error fetching product", err);
    })
  }, [id])


  const handleChange = (e) => {
    const {name, value} = e.target;
    setProduct({...product, [name]: value})
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    axios.patch(`http://localhost:3000/api/products/${id}`, product).then((res) => {
      console.log('Product Updated:', res.data);
      useNavigate(`http://localhost:3000/`)
    })
    .catch((error) => {
      console.error('Error creating product:', error);
    });
  };
  
  return(
    <div>
      <h2>Edit Product</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title</label>
          <input type="text" name='title' value={product.title} onChange={handleChange} required />
        </div>
        <div>
          <label>Price</label>
          <input type="text" name='price' value={product.price} onChange={handleChange} required />
        </div>
        <div>
          <label>Description</label>
          <textarea name="description" value={product.description} onChange={handleChange} cols="30" rows="10"></textarea>
        </div>
        <button type='submit'>Update</button>
        
      </form>
    </div>
  );
}

export default EditProductForm