import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { Input } from '@rocketseat/unform';

import { MdDone, MdKeyboardArrowLeft } from 'react-icons/md';

import * as Yup from 'yup';
import { toast } from 'react-toastify';
import InputMask from 'react-input-mask';
import api from '../../services/api';
import history from '../../services/history';

import { Container, Content, PropForm } from './styles';

export default function EditDestinatarios({ match }) {
  const [destinatarios, setDestinatarios] = useState([]);
  const [zipCode, setZipCode] = useState('');

  // LOAD DESTINATARIOS from api
  useEffect(() => {
    async function loadDestinatarios() {
      const responseDestinatarios = await api.get('recipients', {
        params: { page: match.params.page },
      });
      setDestinatarios(responseDestinatarios.data);
    }
    loadDestinatarios();
  }, [match.params.page]);

  const selectedDestinatario = destinatarios.find(
    dest => dest.id === Number(match.params.id)
  );

  function goBack() {
    history.push('/destinatarios');
  }

  async function handleEditDestinatario(data) {
    try {
      const updateUserData = { ...data, cep: zipCode.split('-').join('') };

      const schema = Yup.object().shape({
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

      await schema.validate(updateUserData, {
        abortEarly: false,
      });

      await api.put(`recipients`, updateUserData);

      toast.success('Destinatário atualizado com sucesso');
      goBack();
    } catch (err) {
      toast.error(err?.errors[0]);
    }
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
          <div className="email">
            <strong>Email</strong>
            <Input
              name="email"
              type="email"
              value={selectedDestinatario?.email}
            />
          </div>

          <div className="nome">
            <strong>Nome</strong>
            <Input
              name="nome"
              type="text"
              placeholder={selectedDestinatario?.nome}
            />
          </div>

          <div className="rua-num-comp">
            <div className="rua">
              <strong>Rua</strong>
              <Input
                name="rua"
                type="text"
                placeholder={selectedDestinatario?.rua}
              />
            </div>

            <div className="numero">
              <strong>Numero</strong>
              <Input
                name="numero"
                type="text"
                placeholder={selectedDestinatario?.numero}
              />
            </div>

            <div className="complemento">
              <strong>Complemento</strong>
              <Input
                name="complemento"
                type="text"
                placeholder={selectedDestinatario?.complemento}
              />
            </div>
          </div>

          <div className="cid-est-cep">
            <div className="cidade">
              <strong>Cidade:</strong>
              <Input
                name="cidade"
                type="text"
                placeholder={selectedDestinatario?.cidade}
              />
            </div>

            <div className="estado">
              <strong>Estado:</strong>
              <Input
                name="estado"
                type="text"
                placeholder={selectedDestinatario?.estado}
              />
            </div>

            <div className="cep">
              <strong>CEP:</strong>
              <InputMask
                name="cep"
                label="CEP"
                mask="99999-999"
                maskChar=""
                placeholder={selectedDestinatario?.cep}
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

EditDestinatarios.propTypes = {
  match: PropTypes.oneOfType([PropTypes.object]).isRequired,
};
