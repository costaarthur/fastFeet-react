import React, { useState, useEffect, useMemo } from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

import { Container, Content, Problema, Pagination } from './styles';
import ProblemaOptions from '../../components/ProblemaOptions';

import api from '../../services/api';

export default function Problemas() {
  const [problemas, setProblemas] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function loadProblemas() {
      const responseProblemas = await api.get('encomendas/problems', {
        params: { page },
      });

      if (responseProblemas.data.length === 0) {
        setPage(page <= 0 ? 1 : page - 1);
      }

      if (responseProblemas.data.length > 0) {
        setProblemas(responseProblemas.data);
      }
    }
    loadProblemas();
  }, [page]);

  useMemo(() => {
    if (page === 0) {
      setPage(1);
      setProblemas([]);
    }
  }, [page]);

  function changePage(minusPlus) {
    if (minusPlus === 'minus' && page > 1) {
      setPage(page - 1);
    }

    if (minusPlus === 'plus' && problemas.length >= 1) {
      setPage(page + 1);
    }
  }

  return (
    <Container>
      <Content>
        <header>Problemas na entrega</header>

        <div className="ul-header">
          <strong>Encomenda</strong>
          <strong>Problema</strong>
          <strong>Ações</strong>
        </div>
        <ul>
          {problemas.map(problema => (
            <Problema key={problema.id}>
              <h1>#{problema.Encomenda.id}</h1>
              <h2>{problema.description}</h2>
              <h1>
                <ProblemaOptions selectedProblema={problema} />
              </h1>
            </Problema>
          ))}
        </ul>
        <Pagination>
          <button
            className="pag"
            type="submit"
            onClick={() => changePage('minus')}
            disabled={false}
          >
            <MdChevronLeft size={24} color="#fff" />
          </button>
          <input type="text" value={page} readOnly />
          <button
            className="pag"
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
