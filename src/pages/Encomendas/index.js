import React from 'react';
import { MdLens } from 'react-icons/md';
import { FiPlus, FiSearch } from 'react-icons/fi';

import { Container, Content, CadastroButton, Status } from './styles';
import EncomendaOptions from '../../components/EncomendaOptions';

export default function Encomendas() {
  return (
    <Container>
      <Content>
        <header>Gerenciando encomendas</header>

        <div className="find-cadastro">
          <input type="text" placeholder="Buscar por encomendas" id="" />
          {/* <FiSearch /> */}
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
            <div className="name-with-pic">
              <img
                src="https://api.adorable.io/avatars/40/abott@adorable.png"
                alt="Izabera"
              />
              <h1>Izabera</h1>
            </div>
            <h1>Vila Velha</h1>
            <h1>Espírito Santo</h1>
            <Status>
              <MdLens />
              <h2>Entregue</h2>
            </Status>
            <h1>
              <EncomendaOptions />
            </h1>
          </li>

          {/* <hr /> */}

          <li>
            <h1>#01</h1>
            <h1>Norman</h1>
            <div className="name-with-pic">
              <img
                src="https://api.adorable.io/avatars/40/abott@adorable.png"
                alt="Izabera"
              />
              <h1>Izabera</h1>
            </div>
            <h1>Vila Velha</h1>
            <h1>Espírito Santo</h1>
            <Status>
              <MdLens />
              <h2>Entregue</h2>
            </Status>
            <h1>
              <EncomendaOptions />
            </h1>
          </li>

          <li>
            <h1>#01</h1>
            <h1>Norman</h1>
            <div className="name-with-pic">
              <img
                src="https://api.adorable.io/avatars/40/abott@adorable.png"
                alt="Izabera"
              />
              <h1>Izabera</h1>
            </div>
            <h1>Vila Velha</h1>
            <h1>Espírito Santo</h1>
            <Status>
              <MdLens />
              <h2>Entregue</h2>
            </Status>
            <h1>
              <EncomendaOptions />
            </h1>
          </li>
          <li>
            <h1>#01</h1>
            <h1>Norman</h1>
            <div className="name-with-pic">
              <img
                src="https://api.adorable.io/avatars/40/abott@adorable.png"
                alt="Izabera"
              />
              <h1>Izabera</h1>
            </div>
            <h1>Vila Velha</h1>
            <h1>Espírito Santo</h1>
            <Status>
              <MdLens />
              <h2>Entregue</h2>
            </Status>
            <h1>
              <EncomendaOptions />
            </h1>
          </li>
          <li>
            <h1>#01</h1>
            <h1>Norman</h1>
            <div className="name-with-pic">
              <img
                src="https://api.adorable.io/avatars/40/abott@adorable.png"
                alt="Izabera"
              />
              <h1>Izabera</h1>
            </div>
            <h1>Vila Velha</h1>
            <h1>Espírito Santo</h1>
            <Status>
              <MdLens />
              <h2>Entregue</h2>
            </Status>
            <h1>
              <EncomendaOptions />
            </h1>
          </li>
          <li>
            <h1>#01</h1>
            <h1>Norman</h1>
            <div className="name-with-pic">
              <img
                src="https://api.adorable.io/avatars/40/abott@adorable.png"
                alt="Izabera"
              />
              <h1>Izabera</h1>
            </div>
            <h1>Vila Velha</h1>
            <h1>Espírito Santo</h1>
            <Status>
              <MdLens />
              <h2>Entregue</h2>
            </Status>
            <h1>
              <EncomendaOptions />
            </h1>
          </li>
        </ul>
      </Content>
    </Container>
  );
}
