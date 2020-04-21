import React, { useState, useEffect, useRef } from 'react';

import { Form, useField, Input } from '@rocketseat/unform';
// import Select, { Props as AsyncProps } from 'react-select/async';

import { MdDone, MdKeyboardArrowLeft } from 'react-icons/md';

// import Select from '../../components/Select';
import Select from 'react-select';

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

  function customTheme(theme) {
    return {
      ...theme,
      width: '405px',
      colors: {
        ...theme.colors,
        primary25: 'purple',
        primary: 'green',
      },
    };
  }

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
  async function handleEditEncomenda(data) {
    console.log(destArray);

    console.log(
      encomendas
        .slice()
        .reverse()
        .filter((v, i, a) => a.findIndex(t => t.Ent.nome === v.Ent.nome) === i)
        .reverse()
        .map(encomenda => encomenda.Ent.id)
        .join()
    );

    console.log(destSelected.value);

    // const allInputs = {
    //   id: match.params.id,
    //   recipient_id: recipientRef.current.value,
    //   deliveryman_id: entregadorRef.current.value,
    // product,
    // };
    // console.log(destArray);
    // console.log(entArray);
    // console.log(encomendas);
    // console.log(match);
    // console.log(destinatarioRef.current.state.value.value);
    // console.log(entregadorRef.current.state.value.value);
    // console.log(encomendas);
    // console.log(productName);

    // await api.put(`encomendas`, allInputs);
    // { value: 'blues', label: 'Blues' },
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
                theme={customTheme}
                // name="recipient_id"
                options={destArray}
                // selectedOption="poi"
                // value="{getDestValue}"
                // value={destValue.label}
                // ref={destinatarioRef}
                onChange={setDestSelected}
                // onChange={() => console.log(destinatarioRef.current.value)}
                isSearchable
                placeholder={destPlaceholder}
                autoFocus
              />
            </div>

            <div>
              {/* SELECT ENTREGADORES */}
              <label htmlFor="deliveryman_id">Entregador:</label>

              <Select
                theme={customTheme}
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

// .filter((v, i, a) => a.findIndex(t => t.Recipient.nome === v.Recipient.nome) === i
// const options = [
//   { value: 'blues', label: 'Blues' },
//   { value: 'rock', label: 'Rock' },
//   { value: 'jazz', label: 'Jazz' },
//   { value: 'orchestra', label: 'Orchestra' },
// ];

// return <select options={options} />;
