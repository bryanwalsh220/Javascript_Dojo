import React, {useState} from 'react'
import axios from 'axios';

export default function ProductForm() {
  const[product, setProduct] = useState({
    title: '',
    price: '',
    description: ''
  });



  const handleChange = (e) => {
    const {name, value} = e.target;
    setProduct({...product, [name]: value})
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('http://localhost:3000/api/products', product).then((res) => {
      console.log('Product Created:', res.data);
    })
    .catch((error) => {
      console.error('Error creating product:', error);
    });
  };
  
  return(
    <div>
      <h2>Add a New Product</h2>
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
        <button type='submit'>Submit</button>
        
      </form>
    </div>
  );
}