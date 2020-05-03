import React, { useState } from 'react';

import { Input } from '@rocketseat/unform';

import { MdDone, MdKeyboardArrowLeft } from 'react-icons/md';

import { toast } from 'react-toastify';
import InputMask from 'react-input-mask';
import api from '../../services/api';
import history from '../../services/history';

import { Container, Content, PropForm } from './styles';

export default function AddDestinatarios() {
  const [zipCode, setZipCode] = useState('');

  function goBack() {
    history.push('/destinatarios');
  }

  async function handleAddDestinatario(data) {
    try {
      const rigisterUserData = { ...data, cep: zipCode.split('-').join('') };
      await api.post(`recipients`, rigisterUserData);

      toast.success('Destinatário adicionado com sucesso');
      goBack();
    } catch (err) {
      toast.error('Erro ao adicionar o destinatário');
    }
  }

  return (
    <Container>
      <PropForm onSubmit={handleAddDestinatario}>
        <div className="edit-back-save">
          <h1>Cadastro de destinatário</h1>

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
          <div className="email">
            <strong>Email</strong>
            <Input name="email" type="email" placeholder="joey@trib.com" />
          </div>

          <div className="nome">
            <strong>Nome</strong>
            <Input name="nome" type="text" placeholder="Joey van Pelt" />
          </div>

          <div className="rua-num-comp">
            <div className="rua">
              <strong>Rua</strong>
              <Input name="rua" type="text" placeholder="Rua da feira" />
            </div>

            <div className="numero">
              <strong>Numero</strong>
              <Input name="numero" type="text" placeholder="21" />
            </div>

            <div className="complemento">
              <strong>Complemento</strong>
              <Input name="complemento" type="text" placeholder="" />
            </div>
          </div>

          <div className="cid-est-cep">
            <div className="cidade">
              <strong>Cidade:</strong>
              <Input name="cidade" type="text" placeholder="Cariacica" />
            </div>

            <div className="estado">
              <strong>Estado:</strong>
              <Input name="estado" type="text" placeholder="Rio de Janeiro" />
            </div>

            <div className="cep">
              <strong>CEP:</strong>
              <InputMask
                name="cep"
                label="CEP"
                mask="99999-999"
                maskChar=""
                placeholder="28204-510"
                value={zipCode}
                onChange={e => setZipCode(e.target.value)}
              />
            </div>
          </div>
        </Content>
      </PropForm>
    </Container>
  );
}
