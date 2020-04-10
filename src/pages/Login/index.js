import React from 'react';
import { useDispatch } from 'react-redux';
// import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { Container, Page } from './styles';

import { signInRequest } from '../../store/modules/auth/actions';

import logo from '../../assets/fastfeet-logo.png';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('O e-mail é obrigatório'),
  password: Yup.string().required('A senha é obrigatória'),
});

export default function Login() {
  const dispatch = useDispatch();

  function handleSubmit({ email, password }) {
    dispatch(signInRequest(email, password));
  }

  return (
    <Page>
      <Container>
        <img src={logo} alt="fastFeet" />

        <Form schema={schema} onSubmit={handleSubmit} to="/encomendas">
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
