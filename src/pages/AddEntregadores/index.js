import React, { useState, useEffect, useRef } from 'react';

import { Form, useField, Input } from '@rocketseat/unform';

import { MdDone, MdKeyboardArrowLeft, MdInsertPhoto } from 'react-icons/md';

import { toast } from 'react-toastify';
import api from '../../services/api';
import history from '../../services/history';

import AvatarInput from './AvatarInput';

import { Container, Content, PropForm } from './styles';

export default function AddEntregadores({ match }) {
  const [encomendas, setEncomendas] = useState([]);
  const [entregadores, setEntregadores] = useState([]);
  const [productName, setProductName] = useState('Carregando...');

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

  // FIND PROFILE PIC PREVIEW
  const profilePreview = entregadores
    .filter(ent => {
      if (ent.id === Number(match.params.id)) return true;
    })
    .map(ent => ent.avatar);
  // .join();

  // ADD ENTREGADOR NA API
  async function handleAddEntregador(data) {
    try {
      if (!data.nome) return toast.error('Você precisa informar um nome');
      if (!data.email) return toast.error('Você precisa informar o email');
      await api.post(`ents`, data);
      toast.success('Entregador cadastrado com sucesso');
    } catch (err) {
      toast.error('Erro ao cadastrar o entregador');
    }
  }

  function goBack() {
    history.push('/entregadores');
  }

  return (
    <Container>
      <PropForm onSubmit={handleAddEntregador}>
        <div className="edit-back-save">
          <h1>Cadastrar entregadores</h1>

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
              <Input name="nome" type="text" placeholder="Mario" />
            </div>

            <div className="email">
              <strong>Email:</strong>
              <Input name="email" type="text" placeholder="email@hotmail.com" />
            </div>
          </div>
        </Content>
      </PropForm>
    </Container>
  );
}
