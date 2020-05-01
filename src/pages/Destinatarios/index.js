import React, { useState, useEffect, useMemo } from 'react';
import {
  MdSearch,
  MdFilterList,
  MdChevronLeft,
  MdChevronRight,
} from 'react-icons/md';
import { FiPlus } from 'react-icons/fi';

import {
  Container,
  Content,
  CadastroButton,
  Destinatario,
  Pagination,
} from './styles';
import DestinatarioOptions from '../../components/DestinatarioOptions';

import api from '../../services/api';
import history from '../../services/history';

export default function Destinatarios() {
  const [destinatarios, setDestinatarios] = useState([]);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('');
  const [filterHasError, setFilterHasError] = useState(false);

  // LOAD DESTINATÁRIOS FROM API
  useEffect(() => {
    const q = filter;

    async function loadDestinatarios() {
      const responseDestinatarios = await api.get('recipients', {
        params: { page, q },
      });

      if (responseDestinatarios.data.length === 0) {
        setPage(page <= 0 ? 1 : page - 1);
      }

      if (responseDestinatarios.data.length > 0) {
        setDestinatarios(responseDestinatarios.data);
        setFilterHasError(false);
      }
    }
    loadDestinatarios();
  }, [page, filter]);

  // MEMO PAGE NEVER 0
  const pageNeverZero = useMemo(() => {
    if (page === 0) {
      setPage(1);
      setFilterHasError(true);
      setDestinatarios([]);
    }
  }, [page]);

  function handleAddDestinatario() {
    history.push(`/destinatarios/add`);
  }

  function changePage(minusPlus) {
    if (minusPlus === 'minus' && page > 1) {
      setPage(page - 1);
    }

    if (minusPlus === 'plus' && destinatarios.length >= 1) {
      setPage(page + 1);
    }
  }

  function handleInputChange(e) {
    setSearch(e.target.value);
    console.log(page);
  }

  function handleFilter() {
    setFilter(search);
  }
  return (
    <Container>
      <Content>
        <header>Gerenciando destinatários</header>

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
          <CadastroButton type="button" onClick={handleAddDestinatario}>
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
          <strong>Nome</strong>
          <strong>Endereço</strong>
          <strong>Ações</strong>
        </div>
        {/* **************lista de destinatários************* */}
        <ul>
          {destinatarios.map(destinatario => (
            <Destinatario key={destinatario.id}>
              <h1>#{destinatario.id}</h1>
              <h1>{destinatario.nome}</h1>
              <h1>
                Rua {destinatario.rua}, {destinatario.numero},{' '}
                {destinatario.cidade} - {destinatario.estado}
              </h1>
              <h1>
                <DestinatarioOptions selectedDestinatario={destinatario} />
              </h1>
            </Destinatario>
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
