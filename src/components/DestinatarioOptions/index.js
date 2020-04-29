import React, { useState } from 'react';
import Modal from 'react-modal';

import { MdMoreHoriz, MdCreate, MdDeleteForever } from 'react-icons/md';

import { toast } from 'react-toastify';
import api from '../../services/api';
import history from '../../services/history';

import { Container, ThreeDots, OptionList, Option } from './styles';

export default function DestinatarioOptions({ selectedDestinatario }) {
  const [visible, setVisible] = useState(false);

  function goEditDestinatarios() {
    history.push(
      `/destinatarios/edit/${selectedDestinatario.id}/?id=${selectedDestinatario.id}`
    );
  }

  function handleToggleVisible() {
    setVisible(!visible);
  }

  async function handleDeleteDestinatario() {
    try {
      const toBeDeleted = { id: selectedDestinatario.id };
      await api.delete(`recipients`, { data: toBeDeleted });
      handleToggleVisible();
      toast.success('Destinatário deletado com sucesso');
    } catch (err) {
      toast.error('O destinatário não foi deletado');
    }
  }

  return (
    <Container>
      <ThreeDots type="button" onClick={handleToggleVisible}>
        <MdMoreHoriz color="#c6c6c6" size={20} />
      </ThreeDots>

      <OptionList visible={visible}>
        <Option>
          <button type="submit" onClick={goEditDestinatarios}>
            <MdCreate color="#4D85EE" />
            Editar
          </button>
          <button type="submit" onClick={handleDeleteDestinatario}>
            <MdDeleteForever color="#DE3B3B" />
            Excluir
          </button>
        </Option>
      </OptionList>
    </Container>
  );
}
