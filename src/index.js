import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ProductDetail from './components/productDetails';
import Basket from './components/basket';
import Checkout from './components/Checkout';

import {
  BrowserRouter,
  Routes,
  Route,
}
from "react-router-dom";

ReactDOM.render (
  <React.StrictMode>
    <BrowserRouter>
     <Routes>
      <Route path="/" element={<App />}/>
       <Route path="products/:productId" element={<ProductDetail />}/>
      <Route path="/basket" element={<Basket/>}/>
      <Route path="/checkout" element={<Checkout/>}/>
        </Routes>

    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


