import React, { useState } from 'react';
import Modal from 'react-modal';

import { MdMoreHoriz, MdVisibility, MdDeleteForever } from 'react-icons/md';

import { toast } from 'react-toastify';
import api from '../../services/api';

import {
  Container,
  ThreeDots,
  OptionList,
  Option,
  ProbOptModal,
} from './styles';

Modal.setAppElement('#root');

export default function ProblemasOptions({ selectedProblema }) {
  const [visible, setVisible] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function handleToggleVisible() {
    setVisible(!visible);
  }

  function openModal() {
    setModalIsOpen(true);
    handleToggleVisible();
  }

  async function handleDeleteProblema() {
    const confirmCancel = window.confirm(
      'Você deseja excluir esse destinatário?'
    );

    if (confirmCancel === true) {
      try {
        const toBeDeleted = { id: selectedProblema.Encomenda.id };
        await api.delete(`encomendas`, { data: toBeDeleted });
        handleToggleVisible();
        toast.success('Encomenda cancelada com sucesso');
      } catch (err) {
        toast.error('A encomenda não foi cancelada');
      }
    }
  }

  return (
    <Container>
      <ProbOptModal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
      >
        <div className="modal-square">
          <div className="info-prob">
            <strong>VISUALIZAR PROBLEMA</strong>
            <h5>{selectedProblema.description}</h5>
          </div>
        </div>
      </ProbOptModal>

      <ThreeDots type="button" onClick={handleToggleVisible}>
        <MdMoreHoriz color="#c6c6c6" size={20} />
      </ThreeDots>

      <OptionList visible={visible}>
        <Option>
          <button type="submit" onClick={openModal}>
            <MdVisibility color="#8E5BE8" />
            Visualizar
          </button>

          <button type="submit" onClick={handleDeleteProblema}>
            <MdDeleteForever color="#DE3B3B" />
            Cancelar encomenda
          </button>
        </Option>
      </OptionList>
    </Container>
  );
}
