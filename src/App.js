import { Routes, Route } from 'react-router-dom';
import React from 'react';
import ProductsBoard from './pages/ProductsBoard';
import './App.css';

function App() {
  return (
    <Routes>
      <Route exact path="/produtos" element= { <ProductsBoard /> } />
      {/* <Route exact path="/produtos/:id" element= { <ProductsBoard /> } /> */}
    </Routes>
  );
}

export default App;
