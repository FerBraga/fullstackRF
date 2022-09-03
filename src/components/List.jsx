import React from 'react';
// import {Link} from 'react-router-dom';

function List({list}) {
  console.log(list)
  
  return (
      <div className="products">
       <div>
         <h3> Lista de produtos</h3>
          {list.data.map((item, index) => (
           <div key={index}className="tags">
            <h5>{item.produto}</h5>
            <h6>{item.valor}</h6>
           </div>
          ))}
       </div>
      </div>
  );
};

export default List;