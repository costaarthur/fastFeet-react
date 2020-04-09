import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Content } from './styles';

import logo from '../../assets/fastfeet-logo.png';

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="GoBarber /" />
          <Link to="/encomendas">ENCOMENDAS</Link>
          <Link to="/entregadores">ENTREGADORES</Link>
          <Link to="/destinatarios">DESTINATÁRIOS</Link>
          <Link to="/problemas">PROBLEMAS</Link>
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
