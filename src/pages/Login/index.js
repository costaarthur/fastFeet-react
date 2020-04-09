import React from 'react';

import { Container, Page } from './styles';

import logo from '../../assets/fastfeet-logo.png';

export default function Login() {
  return (
    <Page>
      <Container>
        <img src={logo} alt="fastFeet" />

        <form action="">
          <strong>SEU E-MAIL</strong>
          <input name="email" type="email" placeholder="exemplo@email.com" />
          <strong>SUA SENHA</strong>
          <input name="password" type="password" placeholder="**************" />
          <button type="submit">Entrar no sistema</button>
        </form>
      </Container>
    </Page>
  );
}
