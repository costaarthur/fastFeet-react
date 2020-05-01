import React, { useState } from 'react';
import Modal from 'react-modal';

import {
  MdMoreHoriz,
  MdVisibility,
  MdCreate,
  MdDeleteForever,
} from 'react-icons/md';

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

Modal.setAppElement('#root');

export default function EncomendaOptions({ selectedEncomenda, selectedPage }) {
  const [visible, setVisible] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function handleToggleVisible() {
    setVisible(!visible);
  }

  function goEditEncomendas() {
    history.push(
      `/encomendas/edit/${selectedEncomenda.id}/${selectedPage}/?id=${selectedEncomenda.id}/?page=${selectedPage}`
    );
  }

  function openModal() {
    setModalIsOpen(true);
    handleToggleVisible();
  }

  async function handleDeleteEncomenda() {
    const confirmCancel = window.confirm(
      'Você deseja cancelar essa encomenda?'
    );

    if (confirmCancel === true) {
      try {
        const toBeDeleted = { id: selectedEncomenda.id };
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
      <EncOptModal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
      >
        <div className="modal-square">
          <div className="info-enc">
            <strong>Informações da encomenda</strong>
            <h5>
              {selectedEncomenda.Recipient.rua},{' '}
              {selectedEncomenda.Recipient.numero}
            </h5>
            <h5>
              {selectedEncomenda.Recipient.cidade},{' '}
              {selectedEncomenda.Recipient.estado}
            </h5>
            <h5>{selectedEncomenda.Recipient.cep}</h5>
          </div>

          <div className="datas">
            <strong>Datas</strong>
            <h4>retirada: {selectedEncomenda.start_date}</h4>
            <h4>entrega: {selectedEncomenda.end_date}</h4>
          </div>

          <div className="sign-group">
            <strong>Assinatura do destinatário</strong>
            <img
              src={selectedEncomenda.Sign ? selectedEncomenda.Sign.url : ''}
              alt="sign"
            />
          </div>
        </div>
      </EncOptModal>

      <ThreeDots type="button" onClick={handleToggleVisible}>
        <MdMoreHoriz color="#c6c6c6" size={20} />
      </ThreeDots>

      <OptionList visible={visible}>
        <Option>
          <button type="submit" onClick={openModal}>
            <MdVisibility color="#8E5BE8" />
            Visualizar
          </button>
          <button type="submit" onClick={goEditEncomendas}>
            <MdCreate color="#4D85EE" />
            Editar
          </button>
          <button type="submit" onClick={handleDeleteEncomenda}>
            <MdDeleteForever color="#DE3B3B" />
            Cancelar
          </button>
        </Option>
      </OptionList>
    </Container>
  );
}
