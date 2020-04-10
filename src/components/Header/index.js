import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { Container, Content } from './styles';

import logo from '../../assets/fastfeet-logo.png';

export default function Header() {
  const [selectedPage, setSelectedPage] = useState('encomendas');

  function selectPage(page) {
    setSelectedPage(page);
    console.log(selectedPage);
  }

  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="FastFeet" />
          <Link to="/encomendas" onClick={() => selectPage('encomendas')}>
            ENCOMENDAS
          </Link>
          <Link to="/entregadores" onClick={() => selectPage('entregadores')}>
            ENTREGADORES
          </Link>
          <Link to="/destinatarios" onClick={() => selectPage('destinatarios')}>
            DESTINATÁRIOS
          </Link>
          <Link to="/problemas" onClick={() => selectPage('problemas')}>
            PROBLEMAS
          </Link>
        </nav>

        <aside>
          <div>
            <strong>Admin FastFeet</strong>
            <Link to="/dashboard">sair do sistema</Link>
          </div>
        </aside>
      </Content>
    </Container>
  );
}
