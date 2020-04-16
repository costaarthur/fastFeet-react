import React, { useState, useEffect } from 'react';

// import { Form, Input } from '@rocketseat/unform';
import { MdDone, MdKeyboardArrowLeft } from 'react-icons/md';

import api from '../../services/api';
import history from '../../services/history';

import { Container, Content, PropForm } from './styles';

// import { store } from '../../store';

export default function EditEncomendas() {
  const [encomendas, setEncomendas] = useState([]);
  // const [page, setPage] = useState(1);

  useEffect(() => {
    async function loadEncomendas() {
      const responseEncomendas = await api.get('encomendas');
      setEncomendas(responseEncomendas.data);
    }
    loadEncomendas();
  }, []);

  function handleEditEncomenda() {
    console.log(encomendas);
  }

  function goBack() {
    history.push('/encomendas');
  }

  return (
    <Container>
      <PropForm onSubmit={handleEditEncomenda}>
        <div className="edit-back-save">
          <h1>Edição encomendas</h1>

          <div className="buttonss">
            <button type="button" onClick={goBack}>
              <MdKeyboardArrowLeft size={16} />
              <h3>Voltar</h3>
            </button>
            <button type="submit">
              <MdDone size={15} />
              <h3>Salvar</h3>
            </button>
          </div>
        </div>
        <Content>
          <div className="dest-ent">
            <div>
              <strong>Destinatário</strong>
              <input type="text" placeholder="Ludwig van Beethoven" />
            </div>

            <div>
              <strong>Entregador</strong>
              <input type="text" placeholder="John Doe" />
            </div>
          </div>

          <div className="prod">
            <strong>Nome do produto</strong>
            <input type="text" placeholder="Yamaha SX7" />
          </div>

          {/* <Input type="text" placeholder="Buscar por encomendas" id="" /> */}
        </Content>
      </PropForm>
    </Container>
  );
}
