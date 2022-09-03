import React from 'react';
import { useState } from 'react';
import api from '../utils';

function Details() {
    const [ler, setar] = useState([]);

const update = async () => {
  const data = await api.get('/produtos/:id');
  setar(data);
}

  return (
      <div className="details">
       <h3>{ler.produto}</h3> 
       <h4>{ler.valor}</h4>
       <p>{ler.descricao}</p>

       <button 
       type='button'
       onClick={() => update}
       > 
       Editar
       </button>
      </div>
  );
};

export default Details;
