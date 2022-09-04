// import axios from 'axios';
import React  from 'react';
import { useState, useEffect } from 'react';
import Header from '../components/Header';
import Products from '../components/Products';
import { getAll } from '../utils';

function ProductsBoard () {
  const [list, setEstado] = useState([]);

  useEffect(() => {
    getAll().then(({data}) => setEstado(data))
}, []);


  return (
   <>
    <Header setEstado={setEstado} />
    <Products list={list} />
   </>
  );
}

export default ProductsBoard;
