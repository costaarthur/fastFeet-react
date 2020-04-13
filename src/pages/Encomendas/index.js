import React, { useState, useEffect } from 'react';
import { MdLens } from 'react-icons/md';
import { FiPlus } from 'react-icons/fi';

import EncomendaOptions from '../../components/EncomendaOptions';

import api from '../../services/api';

import { Container, Content, CadastroButton, Status } from './styles';

import { store } from '../../store';

export default function Encomendas() {
  const [encomendas, setEncomendas] = useState([]);
  const [recipients, setRecipients] = useState([]);

  const { token } = store.getState().auth;

  /*
  checagem status encomendas
  canceled at existe === CANCELADA
  signature_id existe === ENTREGUE
  start date existe && signature id = null === RETIRADA
  canceled att = null && signature id = null && start_date = null === PENDENTE

  canceled at
  signature id
  start date
  */

  useEffect(() => {
    async function loadEncomendas() {
      const responseEncomendas = await api.get('encomendas');
      const dataEncomendas = responseEncomendas.data.map(encomenda => ({
        ...encomenda,
      }));
      setEncomendas(dataEncomendas);
    }

    async function loadRecipients() {
      const responseRecipients = await api.get('recipients');
      const dataRecipients = responseRecipients.data.map(recipient => ({
        ...recipient,
      }));
      setRecipients(dataRecipients);
    }
    loadEncomendas();
    loadRecipients();
  }, []);

  function handleAddEncomenda() {
    console.log(encomendas);
    console.log(recipients);
    console.log(token);
  }

  return (
    <Container>
      <Content>
        <header>Gerenciando encomendas</header>

        <div className="find-cadastro">
          <input type="text" placeholder="Buscar por encomendas" id="" />
          {/* <FiSearch /> */}
          <CadastroButton type="button" onClick={handleAddEncomenda}>
            <FiPlus size={22} />
            {/* <span>Cadastrar</span> */}
            <h3>Cadastrar</h3>
          </CadastroButton>
        </div>

        <div className="ul-header">
          <strong>ID</strong>
          <strong>Destinatário</strong>
          <strong>Entregador</strong>
          <strong>Cidade</strong>
          <strong>Estado</strong>
          <strong>Status</strong>
          <strong>Ações</strong>
        </div>
        {/* **************lista de destinatários************* */}
        <ul>
          <li>
            <h1>#01</h1>
            <h1>Norman</h1>
            <div className="name-with-pic">
              <img
                src="https://api.adorable.io/avatars/40/abott@adorable.png"
                alt="Izabera"
              />
              <h1>Izabera</h1>
            </div>
            <h1>Vila Velha</h1>
            <h1>Espírito Santo</h1>
            <Status>
              <MdLens />
              <h2>Entregue</h2>
            </Status>
            <h1>
              <EncomendaOptions />
            </h1>
          </li>

          {/* <hr /> */}

          <li>
            <h1>#01</h1>
            <h1>Norman</h1>
            <div className="name-with-pic">
              <img
                src="https://api.adorable.io/avatars/40/abott@adorable.png"
                alt="Izabera"
              />
              <h1>Izabera</h1>
            </div>
            <h1>Vila Velha</h1>
            <h1>Espírito Santo</h1>
            <Status>
              <MdLens />
              <h2>Entregue</h2>
            </Status>
            <h1>
              <EncomendaOptions />
            </h1>
          </li>

          <li>
            <h1>#01</h1>
            <h1>Norman</h1>
            <div className="name-with-pic">
              <img
                src="https://api.adorable.io/avatars/40/abott@adorable.png"
                alt="Izabera"
              />
              <h1>Izabera</h1>
            </div>
            <h1>Vila Velha</h1>
            <h1>Espírito Santo</h1>
            <Status>
              <MdLens />
              <h2>Entregue</h2>
            </Status>
            <h1>
              <EncomendaOptions />
            </h1>
          </li>
          <li>
            <h1>#01</h1>
            <h1>Norman</h1>
            <div className="name-with-pic">
              <img
                src="https://api.adorable.io/avatars/40/abott@adorable.png"
                alt="Izabera"
              />
              <h1>Izabera</h1>
            </div>
            <h1>Vila Velha</h1>
            <h1>Espírito Santo</h1>
            <Status>
              <MdLens />
              <h2>Entregue</h2>
            </Status>
            <h1>
              <EncomendaOptions />
            </h1>
          </li>
          <li>
            <h1>#01</h1>
            <h1>Norman</h1>
            <div className="name-with-pic">
              <img
                src="https://api.adorable.io/avatars/40/abott@adorable.png"
                alt="Izabera"
              />
              <h1>Izabera</h1>
            </div>
            <h1>Vila Velha</h1>
            <h1>Espírito Santo</h1>
            <Status>
              <MdLens />
              <h2>Entregue</h2>
            </Status>
            <h1>
              <EncomendaOptions />
            </h1>
          </li>
          <li>
            <h1>#01</h1>
            <h1>Norman</h1>
            <div className="name-with-pic">
              <img
                src="https://api.adorable.io/avatars/40/abott@adorable.png"
                alt="Izabera"
              />
              <h1>Izabera</h1>
            </div>
            <h1>Vila Velha</h1>
            <h1>Espírito Santo</h1>
            <Status>
              <MdLens />
              <h2>Entregue</h2>
            </Status>
            <h1>
              <EncomendaOptions />
            </h1>
          </li>
        </ul>
      </Content>
    </Container>
  );
}
