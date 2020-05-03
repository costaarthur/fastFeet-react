import React, { useState } from 'react';

import { Input } from '@rocketseat/unform';

import { MdDone, MdKeyboardArrowLeft } from 'react-icons/md';

import { toast } from 'react-toastify';
import * as Yup from 'yup';
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
      const registerUserData = { ...data, cep: zipCode.split('-').join('') };

      const schema = Yup.object().shape({
        email: Yup.string()
          .email('Digite um email válido')
          .required('O email do destinatário é obrigatório'),
        nome: Yup.string().required('O nome do destinatário é obrigatório'),
        rua: Yup.string().required('A rua do destinatário é obrigatória'),
        numero: Yup.number()
          .typeError('Informe um número')
          .required('O numero do destinatário é obrigatório'),
        complemento: Yup.string(),
        cidade: Yup.string().required('A cidade do destinatário é obrigatória'),
        estado: Yup.string().required('O estado do destinatário é obrigatório'),
        cep: Yup.string('Informe um número')
          .required('O cep do destinatário é obrigatório')
          .min(8, 'O CEP precisa de 8 dígitos'),
      });

      await schema.validate(registerUserData, {
        abortEarly: false,
      });

      await api.post(`recipients`, registerUserData);

      toast.success('Destinatário adicionado com sucesso');
      goBack();
    } catch (err) {
      toast.error(err?.errors[0]);
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
