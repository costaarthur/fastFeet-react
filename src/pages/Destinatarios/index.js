import React, { useState, useEffect } from 'react';
// import { MdMoreHoriz } from 'react-icons/md';
import { FiPlus } from 'react-icons/fi';

import { Container, Content, CadastroButton, Destinatario } from './styles';
import DestinatarioOptions from '../../components/DestinatarioOptions';

import api from '../../services/api';
import history from '../../services/history';

export default function Destinatarios() {
  const [destinatarios, setDestinatarios] = useState([]);

  // LOAD DESTINATÁRIOS FROM API
  useEffect(() => {
    async function loadDestinatarios() {
      const responseDestinatarios = await api.get('recipients');
      setDestinatarios(responseDestinatarios.data);
    }
    loadDestinatarios();
  }, []);

  function handleAddDestinatario() {
    history.push(`/destinatarios/add`);
  }

  return (
    <Container>
      <Content>
        <header>Gerenciando destinatários</header>

        <div className="find-cadastro">
          <input type="text" placeholder="Buscar por destinatários" />
          <CadastroButton type="button" onClick={handleAddDestinatario}>
            <FiPlus size={22} />
            <h3>Cadastrar</h3>
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
          {destinatarios.map(destinatario => (
            <Destinatario key={destinatario.id}>
              <h1>#{destinatario.id}</h1>
              <h1>{destinatario.nome}</h1>
              <h1>
                Rua {destinatario.rua}, {destinatario.numero},{' '}
                {destinatario.cidade} - {destinatario.estado}
              </h1>
              <h1>
                <DestinatarioOptions selectedDestinatario={destinatario} />
              </h1>
            </Destinatario>
          ))}
        </ul>
      </Content>
    </Container>
  );
}
