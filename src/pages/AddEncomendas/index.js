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

export default function EditEncomendas({ match }) {
  const [encomendas, setEncomendas] = useState([]);
  const [destinatarios, setDestinatarios] = useState([]);
  const [entregadores, setEntregadores] = useState([]);
  const [productName, setProductName] = useState('Carregando...');

  const [destSelected, setDestSelected] = useState(null);
  const [entSelected, setEntSelected] = useState(null);

  const destinatarioRef = useRef(null);
  const entregadorRef = useRef(null);

  const options = [
    { value: 'blues', label: 'Blues' },
    { value: 'rock', label: 'Rock' },
    { value: 'jazz', label: 'Jazz' },
    { value: 'orchestra', label: 'Orchestra' },
  ];

  const customStyles = {
    container: () => ({
      // background: 'green',
      height: '45px',
      border: '1px solid #dddddd',
      margin: '9px 0 0 0',
      // margin: '34px auto',
    }),
    input: () => ({
      // background: 'green',
      textAlign: 'left',
      marginTop: '12px',
      marginLeft: '6px',
    }),
    menu: () => ({
      background: '#ffffff',
      // background: '#7d40e7',
      // position: 'relative',
      // top: '-260px',
      border: '1px solid #dddddd',
      position: 'fixed !important',
      width: '405px',
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
      // color: 'pink',
      // background: 'pink',
      position: 'relative',
      top: '-15px',
      left: '380px',
      color: '#dddddd',
    }),
    placeholder: () => ({
      // background: 'black',
      marginTop: '12px',
      color: '#999999',
      // marginLeft: '6px',
    }),
    option: (provided, state) => ({
      ...provided,
      borderBottom: '1px dotted purple',
      // color: state.isSelected ? 'red' : 'blue',
      color: '#7d40e7',
      padding: '20px',
      // fontColor: 'white',
      // zIndex: '5',
    }),
    singleValue: () => ({
      marginTop: '12px',
      marginLeft: '6px',
      // background: 'grey',
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
      const responseEncomendas = await api.get('encomendas', {
        params: { page: match.params.page },
      });
      setEncomendas(responseEncomendas.data);
    }
    loadEncomendas();
  }, []);

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

  // POST ENCOMENDA NA API
  async function handleAddEncomenda({ product }) {
    // const allInputs = {
    //   recipient_id: destSelected.value,
    //   deliveryman_id: entSelected.value,
    //   product,
    // };
    // console.log(allInputs);

    try {
      const allInputs = {
        recipient_id: destSelected.value,
        deliveryman_id: entSelected.value,
        product,
      };

      console.log(allInputs);

      await api.post(`encomendas`, allInputs);

      toast.success('Encomenda adicionada com sucesso');
    } catch (err) {
      toast.error('Erro não foi possível adicionada a encomenda');
    }
  }

  function goBack() {
    history.push('/encomendas');
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
              <label htmlFor="recipient_id">Destinatário:</label>

              <Select
                // theme={customTheme}
                styles={customStyles}
                name="recipient_id"
                options={destArray}
                onChange={setDestSelected}
                isSearchable
                placeholder="Jorge"
                // placeholder={destPlaceholder}
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
                placeholder="Fernandão"
              />
            </div>
          </div>

          <div className="prod">
            <strong>Nome do produto:</strong>
            <Input name="product" type="text" placeholder="Taco de golf" />
          </div>
          {/* <Input type="text" placeholder="Buscar por encomendas" id="" /> */}
        </Content>
      </PropForm>
    </Container>
  );
}
