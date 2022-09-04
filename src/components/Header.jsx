import React from 'react';
import { useState } from 'react';
import { getBySearch } from '../utils';

function Header({setEstado}) {
    const [estado, atEstado] = useState('');

    const busca = () => {
     getBySearch(estado).then(({data}) => setEstado(data))
    }

   
  return (
      <div className="header">
       <header>
        <label>
          <input 
          type='text'
          data-testid='search-bar'
          name='search'
          value={estado}
          placeholder='Buscar por um produto'
          onChange={(e) =>  atEstado(e.target.value)}
          >
          </input>
          <button 
          type='button'
          onClick={busca}
          >
          pesquisar
          </button>
        </label>
       </header> 
      </div>
  );
};

export default Header;
