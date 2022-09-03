import React  from 'react';
import { useEffect, useState } from 'react';
import Header from '../components/Header';
import Products from '../components/Products';
import { requestData  } from '../utils';

function ProductsBoard () {
  const [list, setEstado] = useState('');

  useEffect(() => {
    requestData('/produtos').then((response) => setEstado(response));
    
  }, []);


  return (
  <>
   <Header />
   <Products list={list} />
  </>
  );
}

export default ProductsBoard;
