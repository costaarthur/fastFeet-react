import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { Input } from '@rocketseat/unform';

import { MdDone, MdKeyboardArrowLeft } from 'react-icons/md';

import Select from 'react-select';

import { toast } from 'react-toastify';
import api from '../../services/api';
import history from '../../services/history';

import { Container, Content, PropForm } from './styles';

export default function EditEncomendas({ match }) {
  const [encomendas, setEncomendas] = useState([]);
  const [entregadores, setEntregadores] = useState([]);
  const [destinatarios, setDestinatarios] = useState([]);

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
      marginLeft: '0px',
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

  useEffect(() => {
    async function loadEncomendas() {
      const responseEncomendas = await api.get('encomendas', {
        params: { page: match.params.page },
      });
      setEncomendas(responseEncomendas.data);
    }
    loadEncomendas();
  }, []);

  useEffect(() => {
    async function loadEntregadores() {
      const responseEntregadores = await api.get('ents');
      setEntregadores(responseEntregadores.data);
    }
    loadEntregadores();
  }, []);

  useEffect(() => {
    async function loadDestinatarios() {
      const responseDestinatarios = await api.get('recipients');
      setDestinatarios(responseDestinatarios.data);
    }
    loadDestinatarios();
  }, []);

  const destArray = destinatarios.map(destinatario => ({
    value: destinatario.id,
    label: destinatario.nome,
  }));

  const entArray = entregadores.map(entregador => ({
    value: entregador.id,
    label: entregador.nome,
  }));

  const findEncomendaData = encomendas.find(
    enc => enc.id === Number(match.params.id)
  );

  function goBack() {
    history.push('/encomendas');
  }

  async function handleEditEncomenda(data) {
    try {
      const allInputs = {
        id: Number(match.params.id),
        recipient_id: destSelected.value,
        deliveryman_id: entSelected.value,
        product: data.product,
      };
      await api.put(`encomendas`, allInputs);

      toast.success('Encomenda atualizada com sucesso');
      goBack();
    } catch (err) {
      toast.error('Erro ao atualizar a encomenda');
    }
  }

  return (
    <Container>
      <PropForm onSubmit={handleEditEncomenda}>
        <div className="edit-back-save">
          <h1>Edição encomendas</h1>

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
              <strong>Destinatário:</strong>
              <Select
                // theme={customTheme}
                styles={customStyles}
                name="recipient_id"
                options={destArray}
                onChange={setDestSelected}
                isSearchable
                placeholder={findEncomendaData?.Recipient.nome}
                autoFocus
              />
            </div>

            <div>
              <strong>Entregador:</strong>
              <Select
                styles={customStyles}
                options={entArray}
                onChange={setEntSelected}
                isSearchable
                placeholder={findEncomendaData?.Ent.nome}
              />
            </div>
          </div>

          <div className="prod">
            <strong>Nome do produto:</strong>
            <Input
              name="product"
              type="text"
              placeholder={findEncomendaData?.product}
            />
          </div>
        </Content>
      </PropForm>
    </Container>
  );
}

EditEncomendas.propTypes = {
  match: PropTypes.node,
};

EditEncomendas.defaultProps = {
  match: null,
};
