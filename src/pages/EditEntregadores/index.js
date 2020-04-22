import React, { useState, useEffect, useRef } from 'react';

import { Form, useField, Input } from '@rocketseat/unform';

import { MdDone, MdKeyboardArrowLeft } from 'react-icons/md';

// import Select from '../../components/Select';
import Select from 'react-select';

import { toast } from 'react-toastify';
import api from '../../services/api';
import history from '../../services/history';

// import AsyncSelect from '../../components/Form/select';
import AvatarInput from './AvatarInput';

import { Container, Content, PropForm, SelectForm } from './styles';

export default function EditEntregadores({ match }) {
  const [encomendas, setEncomendas] = useState([]);
  const [entregadores, setEntregadores] = useState([]);
  const [productName, setProductName] = useState('Carregando...');

  const destinatarioRef = useRef(null);
  const entregadorRef = useRef(null);

  // LOAD ENCOMENDAS from api
  useEffect(() => {
    async function loadEncomendas() {
      const responseEncomendas = await api.get('encomendas');
      setEncomendas(responseEncomendas.data);

      const getProduct = responseEncomendas.data.map(encomenda => {
        if (encomenda.id === Number(match.params.id)) {
          setProductName(encomenda.product);
        }
      });
    }
    loadEncomendas();
  }, []);
  // LOAD ENTREGADORES from api
  useEffect(() => {
    async function loadEntregadores() {
      const responseEntregadores = await api.get('ents');
      setEntregadores(responseEntregadores.data);
    }
    loadEntregadores();
  }, []);

  // CREATE SELECT ENTREGADORES ARRAY
  const entArray = encomendas
    .slice()
    .reverse()
    .filter(
      (v, i, a) => a.findIndex(t => t.Recipient.nome === v.Recipient.nome) === i
    )
    .reverse()
    .map(encomenda => ({
      value: encomenda.Ent.id,
      label: encomenda.Ent.nome,
    }));

  // FIND ENTREGADOR PLACEHOLDER
  const entPlaceholder = entregadores
    .filter(ent => {
      if (ent.id === Number(match.params.id)) return true;
    })
    .map(ent => ent.nome)
    .join();

  // FIND EMAIL PLACEHOLDER
  const emailPlaceholder = entregadores
    .filter(ent => {
      if (ent.id === Number(match.params.id)) return true;
    })
    .map(ent => ent.email)
    .join();

  // FIND PROFILE PIC PREVIEW
  const profilePreview = entregadores
    .filter(ent => {
      if (ent.id === Number(match.params.id)) return true;
    })
    .map(ent => ent.avatar.url)
    .join();

  // GET DESTINATÁRIO VALUE
  const getDestValue = encomendas
    .filter(
      (v, i, a) => a.findIndex(t => t.Recipient.nome === v.Recipient.nome) === i
    )
    .map(encomenda => encomenda.Recipient.id)
    .join();
  // GET ENTREGADOR VALUE
  const getEntValue = encomendas
    .filter((v, i, a) => a.findIndex(t => t.Ent.nome === v.Ent.nome) === i)
    .map(encomenda => encomenda.Ent.id)
    .join();

  // UPDATE ENCOMENDA NA API
  async function handleEditEntregador(data) {
    console.log(profilePreview);
    console.log(data);
    //   try {
    //     const allInputs = {
    //       id: Number(match.params.id),
    //       recipient_id: destSelected.value,
    //       deliveryman_id: entSelected.value,
    //       product,
    //     };
    //     console.log(allInputs);

    //     await api.delete(`encomendas`, allInputs);

    //     toast.success('Encomenda atualizada com sucesso');
    //   } catch (err) {
    //     toast.error('Erro ao atualizar a encomenda');
    //   }
  }

  function goBack() {
    history.push('/entregadores');
  }

  return (
    <Container>
      <PropForm onSubmit={handleEditEntregador}>
        <div className="edit-back-save">
          <h1>Edição entregadores</h1>

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
          <AvatarInput
            name="avatar_id"
            selectedEntregador={match}
            avatar={
              profilePreview ||
              'https://api.adorable.io/avatars/51/abott@adorable.png'
            }
          />
          <div className="nome-email">
            <div className="nome">
              <strong>Nome:</strong>
              <Input name="nome" type="text" placeholder={entPlaceholder} />
            </div>

            <div className="email">
              <strong>Email:</strong>
              <Input name="email" type="text" placeholder={emailPlaceholder} />
            </div>
            {/* <Input type="text" placeholder="Buscar por encomendas" id="" /> */}
          </div>
        </Content>
      </PropForm>
    </Container>
  );
}
