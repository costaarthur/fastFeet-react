import React, { useState } from 'react';
import Modal from 'react-modal';

import {
  MdMoreHoriz,
  MdVisibility,
  MdCreate,
  MdDeleteForever,
} from 'react-icons/md';

// import Encomendas from '../../pages/Encomendas';

import history from '../../services/history';

import {
  Container,
  ThreeDots,
  OptionList,
  Option,
  EncOptModal,
} from './styles';

Modal.setAppElement('#root');

export default function EncomendaOptions({ children }) {
  const [visible, setVisible] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function handleToggleVisible() {
    setVisible(!visible);
  }

  function goEditEncomendas() {
    history.push('/encomendas/edit');
  }

  function openModal() {
    setModalIsOpen(true);
    handleToggleVisible();
  }

  return (
    <Container>
      <EncOptModal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        onAfterOpen={() => console.log(children)}
      >
        <div className="modal-square">
          <strong>Informações da encomenda</strong>
          <h5>{children.Recipient.rua}</h5>
          <h5>{children.Recipient.numero}</h5>
          <h5>{children.Recipient.cidade}</h5>
          <h5>{children.Recipient.estado}</h5>
          <h5>{children.Recipient.cep}</h5>
          <strong>Datas</strong>
          <h4>retirada:</h4>
          <h5>{children.start_date}</h5>
          <h4>entrega:</h4>
          <h5>{children.end_date}</h5>
          <strong>Assinatura do destinatário</strong>
          <img
            src="{
            children.Sign.url
            }"
            alt=""
          />
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
          <button type="submit">
            <MdDeleteForever color="#DE3B3B" />
            Excluir
          </button>
        </Option>
      </OptionList>
    </Container>
  );
}
