import React, { useState, useEffect, useRef } from 'react';

import { Form, useField, Input } from '@rocketseat/unform';

import { MdDone, MdKeyboardArrowLeft } from 'react-icons/md';

// import Select from '../../components/Select';
import Select from 'react-select';

import { toast } from 'react-toastify';
import api from '../../services/api';
import history from '../../services/history';

// import AsyncSelect from '../../components/Form/select';

import { Container, Content, PropForm, SelectForm } from './styles';

export default function EditDestinatarios({ match }) {
  const [destinatarios, setDestinatarios] = useState([]);
  const [productName, setProductName] = useState('Carregando...');

  const [destSelected, setDestSelected] = useState(null);

  const destinatarioRef = useRef(null);
  const entregadorRef = useRef(null);

  // LOAD DESTINATARIOS from api
  useEffect(() => {
    async function loadDestinatarios() {
      const responseDestinatarios = await api.get('recipients');
      setDestinatarios(responseDestinatarios.data);
    }
    loadDestinatarios();
  }, []);

  // FIND SELECTED DESTINATÁRIO
  const selectedDestinatario = destinatarios
    .filter(dest => {
      if (dest.id === Number(match.params.id)) return true;
    })
    .map(dest => dest);
  // .join();

  // FIND DESTINATÁRIO PLACEHOLDER
  // const destPlaceholder = encomendas
  //   .filter(dest => {
  //     if (dest.id === Number(match.params.id)) return true;
  //   })
  //   .map(dest => dest.Recipient.nome)
  //   .join();

  // GET DESTINATÁRIO VALUE
  // const getDestValue = encomendas
  //   .filter(
  //     (v, i, a) => a.findIndex(t => t.Recipient.nome === v.Recipient.nome) === i
  //   )
  //   .map(encomenda => encomenda.Recipient.id)
  //   .join();

  // UPDATE ENCOMENDA NA API
  async function handleEditDestinatario(data) {
    console.log(selectedDestinatario);
    try {
      // const allInputs = {
      //   id: Number(match.params.id),
      //   recipient_id: destSelected.value,
      //   deliveryman_id: entSelected.value,
      //   product,
      // };
      // console.log(allInputs);

      await api.put(`recipients`, data);

      toast.success('Destinatário atualizado com sucesso');
    } catch (err) {
      toast.error('Erro ao atualizar o destinatário');
    }
  }

  function goBack() {
    history.push('/destinatarios');
  }
  return (
    <Container>
      <PropForm onSubmit={handleEditDestinatario}>
        <div className="edit-back-save">
          <h1>Edição de destinatario</h1>

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
          {/* LINHA ZERO (EMAIL) */}
          <div className="email">
            <strong>Email</strong>
            <Input
              name="email"
              type="email"
              value={selectedDestinatario.map(dest => dest.email)}
            // placeholder={selectedDestinatario[0].nome)}
            // placeholder={selectedDestinatario.nome}
            />
          </div>

          {/* PRIMEIRA LINHA */}
          <div className="nome">
            <strong>Nome</strong>
            <Input
              name="nome"
              type="text"
              placeholder={selectedDestinatario.map(dest => dest.nome)}
            // placeholder={selectedDestinatario[0].nome)}
            // placeholder={selectedDestinatario.nome}
            />
          </div>

          {/* SEGUNDA LINHA */}
          <div className="rua-num-comp">
            <div className="rua">
              <strong>Rua</strong>
              <Input
                name="rua"
                type="text"
                placeholder={selectedDestinatario.map(dest => dest.rua)}
              />
            </div>

            <div className="numero">
              <strong>Numero</strong>
              <Input
                name="numero"
                type="text"
                placeholder={selectedDestinatario.map(dest => dest.numero)}
              />
            </div>

            <div className="complemento">
              <strong>Complemento</strong>
              <Input
                name="complemento"
                type="text"
                placeholder={selectedDestinatario.map(dest => dest.complemento)}
              />
            </div>
          </div>
          {/* TERCEIRA LINHA */}
          <div className="cid-est-cep">
            <div className="cidade">
              <strong>Cidade:</strong>
              <Input
                name="cidade"
                type="text"
                placeholder={selectedDestinatario.map(dest => dest.cidade)}
              />
            </div>

            <div className="estado">
              <strong>Estado:</strong>
              <Input
                name="estado"
                type="text"
                placeholder={selectedDestinatario.map(dest => dest.estado)}
              />
            </div>

            <div className="cep">
              <strong>CEP:</strong>
              <Input
                name="cep"
                type="text"
                placeholder={selectedDestinatario.map(dest => dest.cep)}
              />
            </div>
          </div>
          {/* <Input type="text" placeholder="Buscar por encomendas" id="" /> */}
        </Content>
      </PropForm>
    </Container>
  );
}
