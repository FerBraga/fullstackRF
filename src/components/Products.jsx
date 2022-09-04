import React from 'react';
import List from './List';

function Products({list}) {

  return (
      <div className="products">
       <main>
        <div>
         <h1> Produtos</h1>
          <List list={list} />
        </div>
       </main>
      </div>
  );
};

export default Products;
