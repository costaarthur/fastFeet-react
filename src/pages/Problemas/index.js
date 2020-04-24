import React, { useState, useEffect } from 'react';
// import { MdMoreHoriz } from 'react-icons/md';

import { Container, Content, Problema } from './styles';
import ProblemaOptions from '../../components/ProblemaOptions';

import api from '../../services/api';

export default function Problemas() {
  const [problemas, setProblemas] = useState([]);

  // LOAD PROBLEMAS FROM API
  useEffect(() => {
    async function loadProblemas() {
      const responseProblemas = await api.get('encomendas/problems');
      setProblemas(responseProblemas.data);
    }
    loadProblemas();
  }, []);

  function handleConsole() {
    console.log(problemas);
  }

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
          {problemas.map(problema => (
            <Problema key={problema.id}>
              <h1>#{problema.Encomenda.id}</h1>
              <h1>{problema.description}</h1>
              <h1>
                <ProblemaOptions selectedProblema={problema} />
              </h1>
            </Problema>
          ))}

          {/* <li>
            <h1>#01</h1>
            <h1>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Reprehenderit nisi
            </h1>
            <h1>...</h1>
          </li> */}
        </ul>

        <button type="button" onClick={handleConsole} />
      </Content>
    </Container>
  );
}
