import React from 'react';
import { useState } from 'react';

function Header({titulo}) {
    const [estado, atEstado] = useState('');
    
    const handleChange = ({target}) => {
        atEstado(target.value)
    }

  return (
      <div className="header">
       <header>{titulo}
        <label>
          <input 
          type='text'
          data-testid='search-bar'
          name='search'
          value={estado}
          placeholder='Buscar por um produto'
          onChange={handleChange}
          >
          </input>
        </label>
       </header> 
      </div>
  );
};

export default Header;
