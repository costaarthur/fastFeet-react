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
      color: '#dddddd',
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
      // zIndex: '7',
    }),
    // singleValue: (provided, state) => {
    //   const opacity = state.isDisabled ? 0.5 : 1;
    //   const transition = 'opacity 300ms';

    //   return { ...provided, opacity, transition };
    // },
  };

  // const options = [
  //   { value: 'blues', label: 'Blues' },
  //   { value: 'rock', label: 'Rock' },
  //   { value: 'jazz', label: 'Jazz' },
  //   { value: 'orchestra', label: 'Orchestra' },
  // ];

  // const { fieldName, defaultValue, registerField, error } = useField(name);

  // LOAD ENCOMENDAS from api
  useEffect(() => {
    async function loadEncomendas() {
      const responseEncomendas = await api.get('encomendas', {
        params: { page: match.params.page },
      });
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

  // CREATE SELECT DESTINATÁRIO ARRAY
  const destArray = encomendas
    .slice()
    .reverse()
    .filter(
      (v, i, a) => a.findIndex(t => t.Recipient.nome === v.Recipient.nome) === i
    )
    .reverse()
    .map(encomenda => ({
      value: encomenda.Recipient.id,
      label: encomenda.Recipient.nome,
    }));

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

  // FIND DESTINATÁRIO PLACEHOLDER
  const destPlaceholder = encomendas
    .filter(dest => {
      if (dest.id === Number(match.params.id)) return true;
    })
    .map(dest => dest.Recipient.nome)
    .join();

  // FIND ENTREGADOR PLACEHOLDER
  const entPlaceholder = encomendas
    .filter(ent => {
      if (ent.id === Number(match.params.id)) return true;
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
        id: Number(match.params.id),
        recipient_id: destSelected.value,
        deliveryman_id: entSelected.value,
        product,
      };
      console.log(allInputs);

      await api.delete(`encomendas`, allInputs);

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
          {/* <Input type="text" placeholder="Buscar por encomendas" id="" /> */}
        </Content>
      </PropForm>
    </Container>
  );
}
