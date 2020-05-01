import React, { useState } from 'react';
import Modal from 'react-modal';

import { MdMoreHoriz, MdCreate, MdDeleteForever } from 'react-icons/md';

import { toast } from 'react-toastify';
import api from '../../services/api';
import history from '../../services/history';

import { Container, ThreeDots, OptionList, Option } from './styles';

export default function EntregadorOptions({ selectedEntregador }) {
  const [visible, setVisible] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function goEditEntregadores() {
    history.push(
      `/entregadores/edit/${selectedEntregador.id}/?id=${selectedEntregador.id}`
    );
  }

  function handleToggleVisible() {
    setVisible(!visible);
  }

  async function handleDeleteEntregador() {
    const confirmCancel = window.confirm(
      'Você deseja excluir esse entregador?'
    );

    if (confirmCancel === true) {
      try {
        const toBeDeleted = {
          email: selectedEntregador.email,
          nome: selectedEntregador.nome,
        };
        await api.delete('ents', { data: toBeDeleted });
        toast.success('Entregador deletado com sucesso');
      } catch (err) {
        toast.error('O entregador não foi deletado');
      }
    }
  }

  return (
    <Container>
      <ThreeDots type="button" onClick={handleToggleVisible}>
        <MdMoreHoriz color="#c6c6c6" size={20} />
      </ThreeDots>

      <OptionList visible={visible}>
        <Option>
          <button type="submit" onClick={goEditEntregadores}>
            <MdCreate color="#4D85EE" />
            Editar
          </button>
          <button type="submit" onClick={handleDeleteEntregador}>
            <MdDeleteForever color="#DE3B3B" />
            Excluir
          </button>
        </Option>
      </OptionList>
    </Container>
  );
}
