import React, { useState, useEffect } from 'react';
import { MdLens, MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { FiPlus } from 'react-icons/fi';

import EncomendaOptions from '../../components/EncomendaOptions';
// import Pagination from '../../components/Pagination';

import api from '../../services/api';

import {
  Container,
  Content,
  CadastroButton,
  Status,
  Encomenda,
  Pagination,
} from './styles';

import { store } from '../../store';

export default function Encomendas() {
  const [encomendas, setEncomendas] = useState([]);
  const [page, setPage] = useState(1);

  const { token } = store.getState().auth;

  function getStatus(encomenda) {
    if (encomenda.canceled_at) {
      return {
        statusName: 'Cancelada',
        statusColor: '#de3b3b',
        statusBackground: '#fab0b0',
      };
    }
    if (encomenda.signature_id) {
      return {
        statusName: 'Entregue',
        statusColor: '#2ca42b',
        statusBackground: '#dff0df',
      };
    }
    if (encomenda.start_date) {
      return {
        statusName: 'Retirada',
        statusColor: '#4d85ee',
        statusBackground: '#bad2ff',
      };
    }
    if (encomenda.start_date === null) {
      return {
        statusName: 'Pendente',
        statusColor: '#c1bc35',
        statusBackground: '#f0f0df',
      };
    }
  }

  useEffect(() => {
    async function loadEncomendas() {
      const responseEncomendas = await api.get('encomendas', {
        params: { page },
      });
      const dataEncomendas = responseEncomendas.data.map(encomenda => {
        const status = getStatus(encomenda);
        return {
          ...encomenda,
          ...status,
        };
      });
      setEncomendas(dataEncomendas);
    }
    loadEncomendas();
  }, [page]);

  function handleAddEncomenda() {
    console.log(encomendas);
    // console.log(recipients);
    console.log(token);
    setPage(2);
  }

  function changePage(minusPlus) {
    if (minusPlus === 'minus' && page > 1) {
      setPage(page - 1);
    }
    if (minusPlus === 'plus' && encomendas.length > 1) {
      setPage(page + 1);
    }
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
          {encomendas.map(encomenda => (
            <Encomenda key={encomenda.id}>
              <h1>#{encomenda.id}</h1>
              <h1>{encomenda.Recipient.nome}</h1>
              <div className="name-with-pic">
                <img src={encomenda.Ent.avatar.url} alt="Profile Pic" />
                <h1>{encomenda.Ent.nome}</h1>
              </div>
              <h1>{encomenda.Recipient.cidade}</h1>
              <h1>{encomenda.Recipient.estado}</h1>
              <Status
                colors={encomenda.statusColor}
                backgrounds={encomenda.statusBackground}
                statuss={encomenda.statusName}
              >
                <MdLens />
                <h2>{encomenda.statusName}</h2>
              </Status>
              <h1>
                <EncomendaOptions
                  selectedEncomenda={encomenda}
                  selectedPage={page}
                />
              </h1>
            </Encomenda>
          ))}
        </ul>
        <Pagination>
          <button
            type="submit"
            onClick={() => changePage('minus')}
            disabled={false}
          >
            <MdChevronLeft size={24} color="#fff" />
          </button>
          <input type="text" value={page} readOnly />
          <button
            type="submit"
            onClick={() => changePage('plus')}
            disabled={false}
          >
            <MdChevronRight size={24} color="#fff" />
          </button>
        </Pagination>
      </Content>
    </Container>
  );
}

// GREEN
// background: #dff0df;
// color: #2ca42b;

// YELLOW
// background: #f0f0df;
// color: #c1bc35;

// BLUE
// background: #bad2ff;
// color: #4d85ee;

// RED
// background: #fab0b0;
// color: #de3b3b;
