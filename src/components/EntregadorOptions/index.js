import React, { useState } from 'react';
import Modal from 'react-modal';

import { MdMoreHoriz, MdCreate, MdDeleteForever } from 'react-icons/md';

// import Encomendas from '../../pages/Encomendas';

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

export default function EntregadorOptions({
  selectedEntregador,
  selectedPage,
}) {
  const [visible, setVisible] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function goEditEntregadores() {
    // history.push(
    // `/entregador/edit/${selectedEncomenda.id}/?id=${selectedEncomenda.id}/?page=${selectedPage}`
    // );
  }

  function handleToggleVisible() {
    setVisible(!visible);
  }

  async function handleDeleteEntregador() { }

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
