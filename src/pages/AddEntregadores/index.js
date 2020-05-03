import React from 'react';
import PropTypes from 'prop-types';

import { Input } from '@rocketseat/unform';

import { MdDone, MdKeyboardArrowLeft } from 'react-icons/md';

import { toast } from 'react-toastify';
import api from '../../services/api';
import history from '../../services/history';

import AvatarInput from './AvatarInput';

import { Container, Content, PropForm } from './styles';

export default function AddEntregadores({ match }) {
  function goBack() {
    history.push('/entregadores');
  }

  // ADD ENTREGADOR NA API
  async function handleAddEntregador(data) {
    try {
      await api.post(`ents`, data);
      toast.success('Entregador cadastrado com sucesso');
      goBack();
    } catch (err) {
      toast.error('Verifique se todos os dados foram informados');
    }
  }

  return (
    <Container>
      <PropForm onSubmit={handleAddEntregador}>
        <div className="edit-back-save">
          <h1>Cadastrar entregadores</h1>

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
          <AvatarInput name="avatar_id" selectedEntregador={match} />
          <div className="nome-email">
            <div className="nome">
              <strong>Nome:</strong>
              <Input name="nome" type="text" placeholder="Mario" />
            </div>

            <div className="email">
              <strong>Email:</strong>
              <Input name="email" type="text" placeholder="email@hotmail.com" />
            </div>
          </div>
        </Content>
      </PropForm>
    </Container>
  );
}

AddEntregadores.propTypes = {
  match: PropTypes.oneOfType([PropTypes.object]).isRequired,
};
