import React from 'react';

function NewProduct() {
  return (
  <div className='new-product'>
    <h1>Novo Produto</h1>
    <label htmlFor="produto">Produto
     <input
      name='produto'
      type="text"
     />
    </label>
    <label htmlFor="valor">Valor(R$)
     <input
      name='valor'
      type="number"
     />
    </label>
    <label htmlFor="descricao">Descrição
     <textarea
      rows='10'
      rols='30'
      name='descricao'
     />
    </label>
    <div>
     <button type='submit'>ADD</button>
     <button type='button'>FECHAR</button>
    </div>
  </div>
  );
}

export default NewProduct;
