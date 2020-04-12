import React from 'react';
// import { MdMoreHoriz } from 'react-icons/md';
import { FiPlus } from 'react-icons/fi';

import { Container, Content, CadastroButton } from './styles';
import EncomendaOptions from '../../components/EncomendaOptions';

export default function Encomendas() {
  return (
    <Container>
      <Content>
        <header>Gerenciando encomendas</header>

        <div className="find-cadastro">
          <input type="text" placeholder="Buscar por encomendas" id="" />
          <CadastroButton type="button">
            <FiPlus size={14} />
            {/* <span>Cadastrar</span> */}
            Cadastrar
          </CadastroButton>
        </div>

        <div className="ul-header">
          <strong>ID</strong>
          <strong>Destinatário</strong>
          <strong>Entregador</strong>
          <strong>Cidade</strong>
          <strong>Estado</strong>
          <strong>Status</strong>
          <strong>Ações</strong>
        </div>
        {/* **************lista de destinatários************* */}
        <ul>
          <li>
            <h1>#01</h1>
            <h1>Norman</h1>
            <h1>Izabera</h1>
            <h1>Vila Velha</h1>
            <h1>Espírito Santo</h1>
            <h1>Entregue</h1>
            <h1>
              <EncomendaOptions />
            </h1>
          </li>

          {/* <hr /> */}

          <li>
            <h1>#02</h1>
            <h1>Rie Kugimiya Norman</h1>
            <h1>Izabera</h1>
            <h1>Vila Velha</h1>
            <h1>Espírito Santo</h1>
            <h1>Entregue</h1>
            <h1>
              <EncomendaOptions />
            </h1>
          </li>

          <li>
            <h1>#03</h1>
            <h1>Rie Kugimiya Norman</h1>
            <h1>Izabera</h1>
            <h1>Vila Velha</h1>
            <h1>Espírito Santo</h1>
            <h1>Entregue</h1>
            <h1>
              <EncomendaOptions />
            </h1>
          </li>

          <li>
            <h1>#04</h1>
            <h1>Rie Kugimiya Norman</h1>
            <h1>Izabera</h1>
            <h1>Vila Velha</h1>
            <h1>Espírito Santo</h1>
            <h1>Entregue</h1>
            <h1>
              <EncomendaOptions />
            </h1>
          </li>

          <li>
            <h1>#05</h1>
            <h1>Rie Kugimiya Norman</h1>
            <h1>Izabera</h1>
            <h1>Vila Velha</h1>
            <h1>Espírito Santo</h1>
            <h1>Entregue</h1>
            <h1>
              <EncomendaOptions />
            </h1>
          </li>

          <li>
            <h1>#06</h1>
            <h1>Rie Kugimiya Norman</h1>
            <h1>Izabera</h1>
            <h1>Vila Velha</h1>
            <h1>Espírito Santo</h1>
            <h1>Entregue</h1>
            <h1>
              <EncomendaOptions />
            </h1>
          </li>
        </ul>
      </Content>
    </Container>
  );
}
