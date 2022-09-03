import React from 'react';
import List from './List';
import Details from './Details';

function Products({list}) {
    // const [ler, setar] = useState('');
// useState(() => {},[])

  return (
      <div className="products">
       <main>
        <div>
         <h1> Produtos</h1>
          <List list={list}/>
          <Details  />
        </div>
       </main>
      </div>
  );
};

export default Products;
