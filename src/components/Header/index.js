import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { store } from '../../store';
import { signOut } from '../../store/modules/auth/actions';

import { Container, Content, PropLink } from './styles';

import logo from '../../assets/fastfeet-logo.png';

export default function Header() {
  const { name } = store.getState().admin.profile;
  const dispatch = useDispatch();
  const [, , , urlAtual] = window.location.href.split('/');

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="FastFeet" />
          <PropLink to="/encomendas" selected={urlAtual === 'encomendas'}>
            ENCOMENDAS
          </PropLink>
          <PropLink to="/entregadores" selected={urlAtual === 'entregadores'}>
            ENTREGADORES
          </PropLink>
          <PropLink to="/destinatarios" selected={urlAtual === 'destinatarios'}>
            DESTINATÁRIOS
          </PropLink>
          <PropLink to="/problemas" selected={urlAtual === 'problemas'}>
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
