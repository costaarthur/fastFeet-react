import React from 'react';
// import { MdMoreHoriz } from 'react-icons/md';

import { Container, Content } from './styles';
import EncomendaOptions from '../../components/EncomendaOptions';

export default function Encomendas() {
  return (
    <Container>
      <Content>
        <header>Problemas na entrega</header>

        <div className="ul-header">
          <strong>Encomenda</strong>
          <strong>Problema</strong>
          <strong>Ações</strong>
        </div>
        {/* **************lista de destinatários************* */}
        <ul>
          <li>
            <h1>#01</h1>
            <h1>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Reprehenderit nisi
            </h1>
            <h1>
              <EncomendaOptions />
            </h1>
          </li>

          <li>
            <h1>#01</h1>
            <h1>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Reprehenderit nisi a cumque
            </h1>
            <h1>
              <EncomendaOptions />
            </h1>
          </li>
          <li>
            <h1>#01</h1>
            <h1>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Reprehenderit nisi a
            </h1>
            <h1>
              <EncomendaOptions />
            </h1>
          </li>
          <li>
            <h1>#01</h1>
            <h1>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Reprehenderit nisi a cumque
            </h1>
            <h1>
              <EncomendaOptions />
            </h1>
          </li>
          <li>
            <h1>#01</h1>
            <h1>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Reprehenderit nisi a cumque
            </h1>
            <h1>
              <EncomendaOptions />
            </h1>
          </li>
          <li>
            <h1>#01</h1>
            <h1>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Reprehenderit nisi a
            </h1>
            <h1>
              <EncomendaOptions />
            </h1>
          </li>
        </ul>
      </Content>
    </Container>
  );
}
