import React from 'react';
import Modal from 'react-modal';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getById } from '../utils';
import { useState } from 'react';

Modal.setAppElement('#root');

function Details() {
    const [estado, setar] = useState([]);
    const [modal, setModal] = useState(false);
    const [estadoDoProduto, setEstadoProduto] = useState('');
    const [estadoDoValor, setEstadoValor] = useState('');
    const [estadoDaDescricao, setEstadoDescricao] = useState('');
    const location = useLocation();

    useEffect(() => {
      getById(location.pathname).then(({data}) => setar(data[0]))
    }, [location]);

    const handleOpen = () => {
      setModal(true);
    }

    const handleClose = () =>{
      setModal(false);

    }

  return (
    <div className="details">
      <h3>{estado.produto}</h3> 
      <h4>{estado.valor}</h4>
      <p>{estado.descricao}</p>

      <button 
      type='button'
      onClick={handleOpen}
      > 
      Editar
      </button>

    <Modal
    isOpen={modal}
    onRequestClose={handleClose}
    >
      <div className='new-product'>
       <h1>Novo Produto</h1>
        <form action= 'produtos' method='post'>
          <label htmlFor="produto">
            Produto
            <input
              name='produto'
              type="text"
              value={estadoDoProduto}
              onChange={(e) =>  setEstadoProduto(e.target.value)}
            />
          </label>
          <label htmlFor="valor">
            Valor(R$)
            <input
              name='valor'
              type="number"
              value={estadoDoValor}
              onChange={(e) => setEstadoValor(e.target.value)}
            />
          </label>
          <label htmlFor="descricao"> <br/> 
            Descrição
            <textarea
              rows='10'
              rols='30'
              name='descricao'
              value={estadoDaDescricao}
              onChange={(e) => setEstadoDescricao(e.target.value)}
            />
          </label>
            <div>
            <button 
            type='submit'
            >
            ADD
            </button>
            <button 
            type='button'
            onClick={handleClose}
            >
              FECHAR
            </button>
          </div>
        </form>
      </div>
    </Modal>
      
      </div>
  );
};

export default Details;
