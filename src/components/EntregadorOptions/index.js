import React, { useState } from 'react';
import Modal from 'react-modal';

import { MdMoreHoriz, MdCreate, MdDeleteForever } from 'react-icons/md';

import { toast } from 'react-toastify';
import api from '../../services/api';
import history from '../../services/history';

import {
  Container,
  ThreeDots,
  OptionList,
  Option,
  EncOptModal,
} from './styles';

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
    try {
      console.log('entreeei1');
      const toBeDeleted = {
        email: selectedEntregador.email,
        nome: selectedEntregador.nome,
      };

      console.log(toBeDeleted);
      await api.del('ents', toBeDeleted);
      console.log(toBeDeleted);
      console.log('entreeei13');

      toast.success('Entregador deletado com sucesso');
    } catch (err) {
      toast.error('O entregador não foi deletado');
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
