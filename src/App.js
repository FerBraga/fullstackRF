import { Routes, Route } from 'react-router-dom';
import React from 'react';
import ProductsBoard from './pages/ProductsBoard';
import './App.css';
import Details from './components/Details';

function App() {
  return (
    <Routes>
      <Route exact path="/produtos" element= { <ProductsBoard /> } />
      <Route exact path="/produtos/:id" element= { <Details /> } />
    </Routes>
  );
}

export default App;
