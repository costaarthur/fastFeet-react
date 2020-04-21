import React, { useState, useEffect } from 'react';
// import { MdMoreHoriz } from 'react-icons/md';
import { FiPlus } from 'react-icons/fi';

import api from '../../services/api';

import { Container, Content, CadastroButton, Entregador } from './styles';
import EntregadorOptions from '../../components/EntregadorOptions';

export default function Entregadores() {
  const [entregadores, setEntregadores] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function loadEntregadores() {
      const responseEntregadores = await api.get('ents', {
        params: { page },
      });
      setEntregadores(responseEntregadores.data);
    }
    loadEntregadores();
  }, []);

  function handleAddEntregador() {
    console.log(entregadores);
    // console.log(recipients);
    // console.log(token);
    setPage(2);
  }

  return (
    <Container>
      <Content>
        <header>Gerenciando entregadores</header>

        <div className="find-cadastro">
          <input type="text" placeholder="Buscar por entregadores" />
          <CadastroButton type="button" onClick={handleAddEntregador}>
            <FiPlus size={22} />
            <h3>Cadastrar</h3>
          </CadastroButton>
        </div>

        <div className="ul-header">
          <strong>ID</strong>
          <strong>Foto</strong>
          <strong>Nome</strong>
          <strong>Email</strong>
          <strong>Ações</strong>
        </div>
        {/* **************lista de destinatários************* */}
        <ul>
          {entregadores.map(entregador => (
            <Entregador key={entregador.id}>
              <h1>#{entregador.id}</h1>
              <img
                src={
                  entregador.avatar
                    ? entregador.avatar.url
                    : 'https://api.adorable.io/avatars/40/abott@adorable.png'
                }
                alt=""
              />
              <h1>{entregador.nome}</h1>
              <h1>{entregador.email}</h1>
              <h1>
                <EntregadorOptions
                  selectedEntregador={entregador}
                  selectedPage={page}
                />
              </h1>
            </Entregador>
          ))}
        </ul>
      </Content>
    </Container>
  );
}
