import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { store } from '../../store';
import { signOut } from '../../store/modules/auth/actions';

import { Container, Content, PropLink } from './styles';

import logo from '../../assets/fastfeet-logo.png';

export default function Header() {
  // const [selected, setSelected] = useState('encomendas');
  // const [paintEncomendas, setPaintEncomendas] = useState(true);
  // const [paintEntregadores, setPaintEntregadores] = useState(false);
  // const [paintDestinatarios, setPaintDestinatarios] = useState(false);
  // const [paintProblemas, setPaintProblemas] = useState(false);

  const { name } = store.getState().admin.profile;
  const dispatch = useDispatch();
  const [, , , urlAtual] = window.location.href.split('/');

  // useEffect(() => {
  //   function changeHeaderColor() {
  //     if (selected === 'encomendas') {
  //       setPaintEncomendas(true);
  //       setPaintEntregadores(false);
  //       setPaintDestinatarios(false);
  //       setPaintProblemas(false);
  //     }

  //     if (selected === 'entregadores') {
  //       setPaintEntregadores(true);
  //       setPaintEncomendas(false);
  //       setPaintDestinatarios(false);
  //       setPaintProblemas(false);
  //     }

  //     if (selected === 'destinatarios') {
  //       setPaintDestinatarios(true);
  //       setPaintEncomendas(false);
  //       setPaintEntregadores(false);
  //       setPaintProblemas(false);
  //     }

  //     if (selected === 'problemas') {
  //       setPaintProblemas(true);
  //       setPaintEncomendas(false);
  //       setPaintEntregadores(false);
  //       setPaintDestinatarios(false);
  //     }
  //   }
  //   changeHeaderColor();
  // }, [selected]);

  // function selectPage(page) {
  //   setSelected(page);
  // }

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="FastFeet" />
          <PropLink
            to="/encomendas"
            // onClick={() => {
            // selectPage('encomendas');
            // setPaintEncomendas(false);
            // }
            // }
            selected={urlAtual === 'encomendas'}
          >
            ENCOMENDAS
          </PropLink>
          <PropLink
            to="/entregadores"
            // onClick={() => selectPage('entregadores')}
            selected={urlAtual === 'entregadores'}
          >
            ENTREGADORES
          </PropLink>
          <PropLink
            to="/destinatarios"
            // onClick={() => selectPage('destinatarios')}
            selected={urlAtual === 'destinatarios'}
          >
            DESTINATÁRIOS
          </PropLink>
          <PropLink
            to="/problemas"
            // onClick={() => selectPage('problemas')}
            selected={urlAtual === 'problemas'}
          >
            PROBLEMAS
          </PropLink>
        </nav>

        <aside>
          <div>
            <strong>{name}</strong>
            <Link onClick={handleSignOut}>sair do sistema</Link>
          </div>
        </aside>
      </Content>
    </Container>
  );
}
