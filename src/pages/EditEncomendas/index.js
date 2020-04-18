import React, { useState, useEffect, useRef } from 'react';

import { Form, useField, Input } from '@rocketseat/unform';
// import Select, { Props as AsyncProps } from 'react-select/async';

import { MdDone, MdKeyboardArrowLeft } from 'react-icons/md';

import Select from 'react-select';
import api from '../../services/api';
import history from '../../services/history';

// import Select from '../../components/Form/select';

import { Container, Content, PropForm } from './styles';

export default function EditEncomendas({ match }) {
  const [encomendas, setEncomendas] = useState([]);
  const [entregadores, setEntregadores] = useState([]);
  const [productName, setProductName] = useState('Carregando...');

  const recipientRef = useRef(null);
  const entregadorRef = useRef(null);

  // REACT SELECT TESTE
  const selectRef = useRef(null);

  const options = [
    { value: 'blues', label: 'Blues' },
    { value: 'rock', label: 'Rock' },
    { value: 'jazz', label: 'Jazz' },
    { value: 'orchestra', label: 'Orchestra' },
  ];

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

  async function handleEditEncomenda({ product }) {
    const allInputs = {
      id: match.params.id,
      recipient_id: recipientRef.current.value,
      deliveryman_id: entregadorRef.current.value,
      product,
    };
    // console.log(allInputs);

    await api.put(`encomendas`, allInputs);
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

              <select name="recipient_id" id="encomenda.id" ref={recipientRef}>
                {encomendas
                  .slice()
                  .reverse()
                  .filter(
                    (v, i, a) =>
                      a.findIndex(
                        t => t.Recipient.nome === v.Recipient.nome
                      ) === i
                  )
                  .reverse()
                  .map(encomenda => (
                    <option
                      key={encomenda.id}
                      value={encomenda.Recipient.id}
                      selected={Number(match.params.id) === encomenda.id}
                    >
                      {encomenda.Recipient.nome}
                    </option>
                  ))}
              </select>
            </div>

            <div>
              {/* SELECT ENTREGADORES */}
              <label htmlFor="deliveryman_id">Entregador:</label>

              <select name="teste2" id="deliveryman_id" ref={entregadorRef}>
                {entregadores.map(entregador => (
                  <option
                    key={entregador.id}
                    value={entregador.id}
                  // selected={}
                  // selected={match.params.id === encomenda.id ? true : false}
                  >
                    {entregador.nome}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="prod">
            <strong>Nome do produto:</strong>
            <Input name="product" type="text" placeholder={productName} />
          </div>
          {/* <Input type="text" placeholder="Buscar por encomendas" id="" /> */}

          <Select
            options={options}
            // value="123"
            ref={selectRef}
            onChange={() => console.log(selectRef.current)}
          />
        </Content>
      </PropForm>
    </Container>
  );
}

// const options = [
//   { value: 'blues', label: 'Blues' },
//   { value: 'rock', label: 'Rock' },
//   { value: 'jazz', label: 'Jazz' },
//   { value: 'orchestra', label: 'Orchestra' },
// ];

// return <select options={options} />;
