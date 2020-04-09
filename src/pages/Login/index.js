import React from 'react';
// import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';

import { Container, Page } from './styles';

import logo from '../../assets/fastfeet-logo.png';

export default function Login() {
  function handleSubmit(data) {
    console.log(data);
  }
  return (
    <Page>
      <Container>
        <img src={logo} alt="fastFeet" />

        <Form onSubmit={handleSubmit}>
          <strong>SEU E-MAIL</strong>
          <Input name="email" type="email" placeholder="exemplo@email.com" />
          <strong>SUA SENHA</strong>
          <Input name="password" type="password" placeholder="**************" />
          <button type="submit">Entrar no sistema</button>
        </Form>
      </Container>
    </Page>
  );
}
