import React from 'react';
import {Link} from 'react-router-dom';

function List({list}) {

  return (
      <div className="products">
       <div>
         <h3> Lista de produtos</h3>
         {list.map((item, index) => (
         <Link key={index}to={`/produtos/${item.id}`}>
           <div key={index}className="tags">
            <h5>{item.produto}</h5>
            <h6>{item.valor}</h6>
           </div>
         </Link>
          ))}
       </div>
      </div>
  );
};



export default List;