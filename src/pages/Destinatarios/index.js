import React from 'react';
// import { MdMoreHoriz } from 'react-icons/md';
import { FiPlus } from 'react-icons/fi';

import { Container, Content, CadastroButton } from './styles';
import EncomendaOptions from '../../components/EncomendaOptions';

export default function Encomendas() {
  return (
    <Container>
      <Content>
        <header>Gerenciando destinatários</header>

        <div className="find-cadastro">
          <input type="text" placeholder="Buscar por entregadores" />
          <CadastroButton type="button">
            <FiPlus size={14} />
            {/* <span>Cadastrar</span> */}
            Cadastrar
          </CadastroButton>
        </div>

        <div className="ul-header">
          <strong>ID</strong>
          <strong>Nome</strong>
          <strong>Endereço</strong>
          <strong>Ações</strong>
        </div>
        {/* **************lista de destinatários************* */}
        <ul>
          <li>
            <h1>#01</h1>
            <h1>Seu Jorge</h1>
            <h1>Rua da praia, 1954, Santos - São Paulo</h1>
            <h1>. . .</h1>
          </li>

          <li>
            <h1>#01</h1>
            <h1>Seu Jorge</h1>
            <h1>Rua da praia, 1954, Santos - São Paulo</h1>
            <h1>. . .</h1>
          </li>
          <li>
            <h1>#01</h1>
            <h1>Seu Jorge</h1>
            <h1>Rua da praia, 1954, Santos - São Paulo</h1>
            <h1>. . .</h1>
          </li>
          <li>
            <h1>#01</h1>
            <h1>Seu Jorge</h1>
            <h1>Rua da praia, 1954, Santos - São Paulo</h1>
            <h1>. . .</h1>
          </li>
          <li>
            <h1>#01</h1>
            <h1>Seu Jorge</h1>
            <h1>Rua da praia, 1954, Santos - São Paulo</h1>
            <h1>. . .</h1>
          </li>
          <li>
            <h1>#01</h1>
            <h1>Seu Jorge</h1>
            <h1>Rua da praia, 1954, Santos - São Paulo</h1>
            <h1>. . .</h1>
          </li>
        </ul>
      </Content>
    </Container>
  );
}
