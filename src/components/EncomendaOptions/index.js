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

export default function EncomendaOptions({ selectedEncomenda }) {
  console.log(selectedEncomenda);
  const [visible, setVisible] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function handleToggleVisible() {
    setVisible(!visible);
  }

  function goEditEncomendas() {
    history.push(`/encomendas/edit/${selectedEncomenda.id}`);
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
        onAfterOpen={() => console.log(selectedEncomenda)}
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
            {/* <h5></h5> */}
            {/* <vr /> */}
            <h4>entrega: {selectedEncomenda.end_date}</h4>
            {/* <h5></h5> */}
          </div>

          <div className="sign-group">
            <strong>Assinatura do destinatário</strong>
            <img
              // src="https://www.leticiaradaic.com.br/wp-content/uploads/2013/06/assinatura_stevejobs1.jpg"
              src={selectedEncomenda.Sign ? selectedEncomenda.Sign.url : ''}
              alt=""
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
          <button type="submit">
            <MdDeleteForever color="#DE3B3B" />
            Excluir
          </button>
        </Option>
      </OptionList>
    </Container>
  );
}
