import React, { useState, useEffect } from 'react';

import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

import { Container } from './styles';

export default function Pagination() {
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function loadPage() {
      setPage(2);
    }
    loadPage();
  }, [page]);

  function changePage() {
    setPage(2);
    console.log(page);
  }

  return (
    <Container>
      <button type="button" onClick={changePage}>
        <MdChevronLeft size={24} color="#fff" />
      </button>
      <input type="text" name="page" id="" value="1" />
      <button type="button" onClick={changePage}>
        <MdChevronRight size={24} color="#fff" />
      </button>
    </Container>
  );
}
