import React, { useState, useEffect } from 'react';

import { Input } from '@rocketseat/unform';

import { MdDone, MdKeyboardArrowLeft } from 'react-icons/md';

import Select from 'react-select';

import { toast } from 'react-toastify';
import api from '../../services/api';
import history from '../../services/history';

import { Container, Content, PropForm } from './styles';

export default function EditEncomendas() {
  const [destinatarios, setDestinatarios] = useState([]);
  const [entregadores, setEntregadores] = useState([]);

  const [destSelected, setDestSelected] = useState(null);
  const [entSelected, setEntSelected] = useState(null);

  const customStyles = {
    container: () => ({
      height: '45px',
      border: '1px solid #dddddd',
      margin: '9px 0 0 0',
    }),
    input: () => ({
      textAlign: 'left',
      marginTop: '12px',
      marginLeft: '6px',
    }),
    menu: () => ({
      background: '#ffffff',
      border: '1px solid #dddddd',
      position: 'relative !important',
      width: '406px',
      zIndex: 1001,
      marginTop: '-12px',
      marginLeft: '-80px',
    }),
    menuList: () => ({}),
    menuPortal: () => ({
      background: 'pink',
    }),
    dropdownIndicator: () => ({
      position: 'relative',
      top: '-18px',
      left: '380px',
      color: '#999999',
    }),
    indicatorSeparator: () => ({}),
    placeholder: base => ({
      ...base,
      fontSize: '1em',
      fontWeight: 400,
      marginTop: '7px',
      marginLeft: '8px',
      color: '#999999',
    }),
    option: provided => ({
      ...provided,
      borderBottom: '1px solid #dddddd',
      color: '#7d40e7',
      padding: '13px',
    }),
    singleValue: () => ({
      marginTop: '12px',
      marginLeft: '6px',
    }),
    clearIndicator: () => ({
      background: 'purple',
    }),
    control: () => ({
      width: '405px',
    }),
  };

  // LOAD DESTINATÁRIOS from api
  useEffect(() => {
    async function loadDestinatarios() {
      const responseDestinatarios = await api.get('recipients');
      setDestinatarios(responseDestinatarios.data);
    }
    loadDestinatarios();
  }, []);

  // LOAD ENTREGADORES from api
  useEffect(() => {
    async function loadEntregadores() {
      const responseEntregadores = await api.get('ents');
      setEntregadores(responseEntregadores.data);
    }
    loadEntregadores();
  }, []);

  // CREATE SELECT DESTINATÁRIO ARRAY
  const destArray = destinatarios.map(destinatario => ({
    value: destinatario.id,
    label: destinatario.nome,
  }));

  // CREATE SELECT ENTREGADORES ARRAY
  const entArray = entregadores.map(entregador => ({
    value: entregador.id,
    label: entregador.nome,
  }));

  function goBack() {
    history.push('/encomendas');
  }

  // POST ENCOMENDA NA API
  async function handleAddEncomenda({ product }) {
    try {
      const allInputs = {
        recipient_id: destSelected.value,
        deliveryman_id: entSelected.value,
        product,
      };
      await api.post(`encomendas`, allInputs);
      toast.success('Encomenda adicionada com sucesso');
      goBack();
    } catch (err) {
      toast.error('Verifique se todos os dados foram informados');
    }
  }

  return (
    <Container>
      <PropForm onSubmit={handleAddEncomenda}>
        <div className="edit-back-save">
          <h1>Cadastro de encomendas</h1>

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
          <div className="dest-ent">
            <div>
              {/* SELECT DESTINATÁRIOS */}
              <strong>Destinatário:</strong>

              <Select
                styles={customStyles}
                id="recipient_id"
                name="recipient_id"
                options={destArray}
                onChange={setDestSelected}
                isSearchable
                placeholder="Jorge"
                autoFocus
              />
            </div>

            <div>
              {/* SELECT ENTREGADORES */}
              <strong>Entregador:</strong>

              <Select
                styles={customStyles}
                options={entArray}
                onChange={setEntSelected}
                isSearchable
                placeholder="Fernandão"
              />
            </div>
          </div>

          <div className="prod">
            <strong>Nome do produto:</strong>
            <Input name="product" type="text" placeholder="Taco de golf" />
          </div>
        </Content>
      </PropForm>
    </Container>
  );
}
