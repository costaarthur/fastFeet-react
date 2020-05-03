import React, { useState, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';

import { Input } from '@rocketseat/unform';

import { MdDone, MdKeyboardArrowLeft } from 'react-icons/md';

import { toast } from 'react-toastify';
import api from '../../services/api';
import history from '../../services/history';

import AvatarInput from './AvatarInput';

import { Container, Content, PropForm } from './styles';

export default function EditEntregadores({ match }) {
  const [entregadores, setEntregadores] = useState([]);

  useEffect(() => {
    async function loadEntregadores() {
      const responseEntregadores = await api.get('ents', {
        params: { page: Number(match.params.page) },
      });
      setEntregadores(responseEntregadores.data);
    }
    loadEntregadores();
  }, []);

  const findEntregadorData = useMemo(
    () => entregadores.find(ent => ent.id === Number(match.params.id)),
    [entregadores]
  );

  function goBack() {
    history.push('/entregadores');
  }

  // UPDATE ENTREGADOR NA API
  async function handleEditEntregador(data) {
    try {
      await api.put(`ents`, data);
      toast.success('Entregador atualizado com sucesso');
      goBack();
    } catch (err) {
      toast.error('Erro ao atualizar o entregador');
    }
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
          <AvatarInput name="avatar_id" avatar={findEntregadorData?.avatar} />
          <div className="nome-email">
            <div className="nome">
              <strong>Nome:</strong>
              <Input
                name="nome"
                type="text"
                placeholder={findEntregadorData?.nome}
              />
            </div>

            <div className="email">
              <strong>Email:</strong>
              <Input
                name="email"
                type="text"
                value={findEntregadorData?.email}
                disabled
              />
            </div>
          </div>
        </Content>
      </PropForm>
    </Container>
  );
}

EditEntregadores.propTypes = {
  match: PropTypes.node,
};

EditEntregadores.defaultProps = {
  match: null,
};
