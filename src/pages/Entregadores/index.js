import React, { useState, useEffect, useMemo } from 'react';
import {
  MdSearch,
  MdFilterList,
  MdChevronLeft,
  MdChevronRight,
} from 'react-icons/md';
import { FiPlus } from 'react-icons/fi';

import api from '../../services/api';
import history from '../../services/history';

import {
  Container,
  Content,
  CadastroButton,
  Entregador,
  Pagination,
} from './styles';
import EntregadorOptions from '../../components/EntregadorOptions';

export default function Entregadores() {
  const [entregadores, setEntregadores] = useState([]);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('');
  const [filterHasError, setFilterHasError] = useState(false);

  useEffect(() => {
    const q = filter;

    async function loadEntregadores() {
      const responseEntregadores = await api.get('ents', {
        params: { page, q },
      });

      if (responseEntregadores.data.length === 0) {
        setPage(page <= 0 ? 1 : page - 1);
      }

      if (responseEntregadores.data.length > 0) {
        // setEntregadores(dataEntregadores);
        setEntregadores(responseEntregadores.data);
        setFilterHasError(false);
      }
    }
    loadEntregadores();
  }, [page, filter]);

  // MEMO PAGE NEVER 0
  const pageNeverZero = useMemo(() => {
    if (page === 0) {
      setPage(1);
      setFilterHasError(true);
      setEntregadores([]);
    }
  }, [page]);

  function handleAddEntregador() {
    history.push(`/entregadores/add`);
  }

  function changePage(minusPlus) {
    if (minusPlus === 'minus' && page > 1) {
      setPage(page - 1);
    }

    if (minusPlus === 'plus' && entregadores.length >= 1) {
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
        <header>Gerenciando entregadores</header>
        <div className="find-cadastro">
          <div className="search-input">
            <div>
              <MdSearch />
            </div>
            <input
              type="text"
              placeholder="Buscar por entregadores"
              id=""
              onChange={handleInputChange}
            />
          </div>
          <button className="filter" type="submit" onClick={handleFilter}>
            <MdFilterList size={18} />
            <h3>Filtrar</h3>
          </button>
          <CadastroButton type="button" onClick={handleAddEntregador}>
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
          <strong>Foto</strong>
          <strong>Nome</strong>
          <strong>Email</strong>
          <strong>Ações</strong>
        </div>
        {/* **************lista de destinatários************* */}
        <ul>
          {entregadores.map(entregador => (
            <Entregador key={entregador.id}>
              <h1>#{entregador.id}</h1>
              <img
                src={
                  entregador.avatar
                    ? entregador.avatar.url
                    : 'https://api.adorable.io/avatars/40/abott@adorable.png'
                }
                alt=""
              />
              <h1>{entregador.nome}</h1>
              <h1>{entregador.email}</h1>
              <h1>
                <EntregadorOptions selectedEntregador={entregador} />
              </h1>
            </Entregador>
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
