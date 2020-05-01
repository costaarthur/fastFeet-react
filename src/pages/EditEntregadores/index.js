import React, { useState, useEffect } from 'react';

import { Input } from '@rocketseat/unform';

import { MdDone, MdKeyboardArrowLeft } from 'react-icons/md';

import { toast } from 'react-toastify';
import api from '../../services/api';
import history from '../../services/history';

import AvatarInput from './AvatarInput';

import { Container, Content, PropForm } from './styles';

export default function EditEntregadores({ match }) {
  const [entregadores, setEntregadores] = useState([]);

  // LOAD ENTREGADORES from api
  useEffect(() => {
    async function loadEntregadores() {
      const responseEntregadores = await api.get('ents', {
        params: { page: Number(match.params.page) },
      });
      setEntregadores(responseEntregadores.data);
    }
    loadEntregadores();
  }, []);

  // FIND ENTREGADOR PLACEHOLDER
  const entPlaceholder = entregadores
    .filter(ent => {
      if (ent.id === Number(match.params.id)) return true;
    })
    .map(ent => ent.nome)
    .join();

  // FIND EMAIL PLACEHOLDER
  const emailPlaceholder = entregadores
    .filter(ent => {
      if (ent.id === Number(match.params.id)) return true;
    })
    .map(ent => ent.email)
    .join();

  // FIND PROFILE PIC PREVIEW
  const profilePreview = entregadores
    .filter(ent => {
      if (ent.id === Number(match.params.id)) return true;
    })
    .map(ent => ent.avatar);

  // UPDATE ENTREGADOR NA API
  async function handleEditEntregador(data) {
    try {
      if (!data.nome) return toast.error('Você precisa informar um nome');
      if (!data.avatar_id)
        return toast.error('Você precisa selecionar um avatar');
      await api.put(`ents`, data);

      toast.success('Entregador atualizado com sucesso');
    } catch (err) {
      toast.error('Erro ao atualizar o entregador');
    }
  }

  function goBack() {
    history.push('/entregadores');
  }

  return (
    <Container>
      <PropForm onSubmit={handleEditEntregador}>
        <div className="edit-back-save">
          <h1>Edição entregadores</h1>

          <div className="buttonss">
            <button type="button" onClick={goBack}>
              <MdKeyboardArrowLeft size={16} />
              <h3>Voltar</h3>
            </button>
            <button type="submit">
              <MdDone size={15} />
              <h3>Salvar</h3>
            </button>
          </div>
        </div>

        <Content>
          <AvatarInput
            name="avatar_id"
            avatar={
              profilePreview ||
              'https://api.adorable.io/avatars/51/abott@adorable.png'
            }
          />
          <div className="nome-email">
            <div className="nome">
              <strong>Nome:</strong>
              <Input name="nome" type="text" placeholder={entPlaceholder} />
            </div>

            <div className="email">
              <strong>Email:</strong>
              <Input
                name="email"
                type="text"
                value={emailPlaceholder}
                disabled
              />
            </div>
            {/* <Input type="text" placeholder="Buscar por encomendas" id="" /> */}
          </div>
        </Content>
      </PropForm>
    </Container>
  );
}
