import React, { useState, useEffect } from 'react';

import { Input } from '@rocketseat/unform';

import { MdDone, MdKeyboardArrowLeft } from 'react-icons/md';

// import Select from '../../components/Select';
import Select from 'react-select';

import { toast } from 'react-toastify';
import api from '../../services/api';
import history from '../../services/history';

// import AsyncSelect from '../../components/Form/select';

import { Container, Content, PropForm } from './styles';

export default function EditEncomendas(props) {
  const [encomendas, setEncomendas] = useState([]);
  const [entregadores, setEntregadores] = useState([]);
  const [destinatarios, setDestinatarios] = useState([]);
  const [productName, setProductName] = useState('Carregando...');

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
      position: 'fixed !important',
      width: '406px',
      zIndex: 1001,
      marginTop: '-12px',
    }),
    menuList: () => ({
      // zIndex: 3,
      // background: 'blue',
    }),
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

  // LOAD ENCOMENDAS from api
  useEffect(() => {
    async function loadEncomendas() {
      const findPage = props.location.search
        .split('?')
        .join('=')
        .split('=');
      const finalPage = findPage[4];

      const responseEncomendas = await api.get('encomendas', {
        params: { page: finalPage },
      });
      setEncomendas(responseEncomendas.data);

      const getProduct = responseEncomendas.data.map(encomenda => {
        if (encomenda.id === Number(props.match.params.id)) {
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

  // LOAD DESTINATÁRIOS from api
  useEffect(() => {
    async function loadDestinatarios() {
      const responseDestinatarios = await api.get('recipients');
      setDestinatarios(responseDestinatarios.data);
    }
    loadDestinatarios();
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

  // FIND DESTINATÁRIO PLACEHOLDER
  const destPlaceholder = encomendas
    .filter(dest => {
      if (dest.id === Number(props.match.params.id)) return true;
    })
    .map(dest => dest.Recipient.nome)
    .join();

  // FIND ENTREGADOR PLACEHOLDER
  const entPlaceholder = encomendas
    .filter(ent => {
      if (ent.id === Number(props.match.params.id)) return true;
    })
    .map(ent => ent.Ent.nome)
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
  async function handleEditEncomenda({ product }) {
    try {
      const allInputs = {
        id: Number(props.match.params.id),
        recipient_id: destSelected.value,
        deliveryman_id: entSelected.value,
        product,
      };
      await api.put(`encomendas`, allInputs);

      toast.success('Encomenda atualizada com sucesso');
    } catch (err) {
      toast.error('Erro ao atualizar a encomenda');
    }
  }

  function goBack() {
    history.push('/encomendas');
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
              {/* SELECT DESTINATÁRIOS */}
              <label htmlFor="recipient_id">Destinatário:</label>

              <Select
                // theme={customTheme}
                styles={customStyles}
                name="recipient_id"
                options={destArray}
                onChange={setDestSelected}
                isSearchable
                placeholder={destPlaceholder}
                autoFocus
              />
            </div>

            <div>
              {/* SELECT ENTREGADORES */}
              <label htmlFor="deliveryman_id">Entregador:</label>

              <Select
                styles={customStyles}
                options={entArray}
                onChange={setEntSelected}
                isSearchable
                placeholder={entPlaceholder}
              />
            </div>
          </div>

          <div className="prod">
            <strong>Nome do produto:</strong>
            <Input name="product" type="text" placeholder={productName} />
          </div>
        </Content>
      </PropForm>
    </Container>
  );
}
