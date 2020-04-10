import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { Container, Content, PropLink } from './styles';

import logo from '../../assets/fastfeet-logo.png';

export default function Header() {
  const [selected, setSelected] = useState('encomendas');
  const [paintEncomendas, setPaintEncomendas] = useState(true);
  const [paintEntregadores, setPaintEntregadores] = useState(false);
  const [paintDestinatarios, setPaintDestinatarios] = useState(false);
  const [paintProblemas, setPaintProblemas] = useState(false);

  useEffect(() => {
    function changeHeaderColor() {
      if (selected === 'encomendas') {
        setPaintEncomendas(true);
        setPaintEntregadores(false);
        setPaintDestinatarios(false);
        setPaintProblemas(false);
      }

      if (selected === 'entregadores') {
        setPaintEntregadores(true);
        setPaintEncomendas(false);
        setPaintDestinatarios(false);
        setPaintProblemas(false);
      }

      if (selected === 'destinatarios') {
        setPaintDestinatarios(true);
        setPaintEncomendas(false);
        setPaintEntregadores(false);
        setPaintProblemas(false);
      }

      if (selected === 'problemas') {
        setPaintProblemas(true);
        setPaintEncomendas(false);
        setPaintEntregadores(false);
        setPaintDestinatarios(false);
      }
    }
    changeHeaderColor();
  }, [selected]);

  function selectPage(page) {
    setSelected(page);
  }

  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="FastFeet" />
          <PropLink
            to="/encomendas"
            onClick={() => {
              selectPage('encomendas');
              setPaintEncomendas(false);
            }}
            selected={paintEncomendas}
          >
            ENCOMENDAS
          </PropLink>
          <PropLink
            to="/entregadores"
            onClick={() => selectPage('entregadores')}
            selected={paintEntregadores}
          >
            ENTREGADORES
          </PropLink>
          <PropLink
            to="/destinatarios"
            onClick={() => selectPage('destinatarios')}
            selected={paintDestinatarios}
          >
            DESTINATÁRIOS
          </PropLink>
          <PropLink
            to="/problemas"
            onClick={() => selectPage('problemas')}
            selected={paintProblemas}
          >
            PROBLEMAS
          </PropLink>
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
