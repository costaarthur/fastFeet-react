import React, { useState, useEffect } from 'react';

import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

import { Container } from './styles';

export default function Pagination(props) {
  const { pagez, encomendasz } = props;
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function loadPage() {
      setPage(page);
    }
    loadPage();
  }, [page]);

  function changePage(minusPlus) {
    if (minusPlus === 'minus' && pagez > 1) {
      setPage(pagez - 1);
    }
    if (minusPlus === 'plus' && encomendasz.length > 1) {
      setPage(pagez + 1);
    }
  }

  return (
    <Container>
      <button
        type="submit"
        onClick={() => changePage('minus')}
        disabled={false}
      >
        <MdChevronLeft size={24} color="#fff" />
      </button>
      <input type="text" value={page} readOnly />
      <button type="submit" onClick={() => changePage('plus')} disabled={false}>
        <MdChevronRight size={24} color="#fff" />
      </button>
    </Container>
  );
}
