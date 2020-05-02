import React from 'react';

import { Input } from '@rocketseat/unform';

import { MdDone, MdKeyboardArrowLeft } from 'react-icons/md';

import { toast } from 'react-toastify';
import api from '../../services/api';
import history from '../../services/history';

import { Container, Content, PropForm } from './styles';

export default function AddDestinatarios() {
  async function handleAddDestinatario(data) {
    try {
      await api.post(`recipients`, data);

      toast.success('Destinatário adicionado com sucesso');
    } catch (err) {
      toast.error('Erro ao adicionar o destinatário');
    }
  }

  function goBack() {
    history.push('/destinatarios');
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
          {/* LINHA ZERO (EMAIL) */}
          <div className="email">
            <strong>Email</strong>
            <Input name="email" type="email" placeholder="joey@trib.com" />
          </div>

          {/* PRIMEIRA LINHA */}
          <div className="nome">
            <strong>Nome</strong>
            <Input
              name="nome"
              type="text"
              placeholder="Joey van Pelt"
            // placeholder={selectedDestinatario[0].nome)}
            // placeholder={selectedDestinatario.nome}
            />
          </div>

          {/* SEGUNDA LINHA */}
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
          {/* TERCEIRA LINHA */}
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
              <Input
                name="cep"
                type="text"
                placeholder="29100-258"
                maxlength="9"
              />
            </div>
          </div>
          {/* <Input type="text" placeholder="Buscar por encomendas" id="" /> */}
        </Content>
      </PropForm>
    </Container>
  );
}
