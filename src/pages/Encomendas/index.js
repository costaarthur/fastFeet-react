import React, { useState, useEffect, useMemo } from 'react';
import {
  MdLens,
  MdChevronLeft,
  MdChevronRight,
  MdSearch,
  MdFilterList,
} from 'react-icons/md';
import { FiPlus } from 'react-icons/fi';

import EncomendaOptions from '../../components/EncomendaOptions';

import api from '../../services/api';
import history from '../../services/history';

import {
  Container,
  Content,
  CadastroButton,
  Status,
  Encomenda,
  Pagination,
} from './styles';

export default function Encomendas() {
  const [encomendas, setEncomendas] = useState([]);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');
  const [textToFilter, setTextToFilter] = useState('');
  const [filterHasError, setFilterHasError] = useState(false);

  function getStatus(encomenda) {
    if (encomenda.canceled_at) {
      return {
        statusName: 'Cancelada',
        statusColor: '#de3b3b',
        statusBackground: '#fab0b0',
        statusWidth: '110px',
      };
    }
    if (encomenda.signature_id) {
      return {
        statusName: 'Entregue',
        statusColor: '#2ca42b',
        statusBackground: '#dff0df',
        statusWidth: '99px',
      };
    }
    if (encomenda.start_date) {
      return {
        statusName: 'Retirada',
        statusColor: '#4d85ee',
        statusBackground: '#bad2ff',
        statusWidth: '97px',
      };
    }
    if (encomenda.start_date === null) {
      return {
        statusName: 'Pendente',
        statusColor: '#c1bc35',
        statusBackground: '#f0f0df',
        statusWidth: '102px',
      };
    }
  }

  useEffect(() => {
    const filter = textToFilter;

    async function loadEncomendas() {
      const responseEncomendas = await api.get('encomendas', {
        params: { page, filter },
      });
      const dataEncomendas = responseEncomendas.data.map(encomenda => {
        const status = getStatus(encomenda);
        return {
          ...encomenda,
          ...status,
        };
      });
      if (dataEncomendas.length === 0) {
        setPage(page <= 0 ? 1 : page - 1);
      }

      if (dataEncomendas.length > 0) {
        setEncomendas(dataEncomendas);
        setFilterHasError(false);
      }
    }
    loadEncomendas();
  }, [page, textToFilter]);

  // MEMO PAGE NEVER 0
  const pageNeverZero = useMemo(() => {
    if (page === 0) {
      setPage(1);
      setFilterHasError(true);
      setEncomendas([]);
    }
  }, [page]);

  // GO ADD ENCOMENDA
  function handleAddEncomenda() {
    history.push(`/encomendas/add`);
  }

  function changePage(minusPlus) {
    if (minusPlus === 'minus' && page > 1) {
      setPage(page - 1);
    }

    if (minusPlus === 'plus' && encomendas.length >= 1) {
      setPage(page + 1);
    }
  }

  // SEARCH INPUT
  function handleInputChange(e) {
    setSearch(e.target.value);
  }

  function handleFilter() {
    setTextToFilter(search);
  }

  return (
    <Container>
      <Content>
        <header>Gerenciando encomendas</header>
        <div className="find-cadastro">
          <div className="search-input">
            <div>
              <MdSearch />
            </div>
            <input
              type="text"
              placeholder="Buscar por encomendas"
              id=""
              onChange={handleInputChange}
            />
          </div>
          <button className="filter" type="submit" onClick={handleFilter}>
            <MdFilterList size={18} />
            <h3>Filtrar</h3>
          </button>
          <CadastroButton type="button" onClick={handleAddEncomenda}>
            <FiPlus size={22} />
            <h3>Cadastrar</h3>
          </CadastroButton>
        </div>

        {filterHasError === true ? (
          <div className="filter-error">
            <span>Produto não existe</span>
          </div>
        ) : (
            <div className="filter-error">
              <span> </span>
            </div>
          )}

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
                <img
                  src={
                    encomenda.Ent.avatar
                      ? encomenda.Ent.avatar.url
                      : 'https://api.adorable.io/avatars/50/abott@adorable.png'
                  }
                  alt="Profile Pic"
                />
                <h1>{encomenda.Ent.nome}</h1>
              </div>
              <h1>{encomenda.Recipient.cidade}</h1>
              <h1>{encomenda.Recipient.estado}</h1>
              <Status
                colors={encomenda.statusColor}
                backgrounds={encomenda.statusBackground}
                statuss={encomenda.statusName}
                width={encomenda.statusWidth}
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
