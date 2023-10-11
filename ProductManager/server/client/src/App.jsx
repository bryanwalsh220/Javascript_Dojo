import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductForm from './components/ProductForm.jsx';
import AllProducts from './components/AllProducts.jsx';
import ProductDetails from './components/ProductDetails.jsx';
import EditProductForm from './components/EditProductForm.jsx';

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <h1>Product Manager</h1>
        </header>
        <main>
          <Routes>
            <Route path="/product-form" element={<ProductForm />} />
            <Route path='/' element={<AllProducts/>}/>
            <Route path='/products/:id' element={<ProductDetails/>}/>
            <Route path='/products/:id/edit' element={<EditProductForm/>}/>
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
