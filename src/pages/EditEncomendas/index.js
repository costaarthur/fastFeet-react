import React, { useState, useEffect } from 'react';

// import { Form, Input } from '@rocketseat/unform';
import { MdDone, MdKeyboardArrowLeft } from 'react-icons/md';

import api from '../../services/api';
import history from '../../services/history';

import { Container, Content, PropForm } from './styles';

export default function EditEncomendas({ match }) {
  const [encomendas, setEncomendas] = useState([]);
  const [entregadores, setEntregadores] = useState([]);
  const [productName, setProductName] = useState('Carregando...');

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

  function handleEditEncomenda() {
    // console.log(encomendas);
    // console.log(match);
    // console.log(productName);

    console.log(match.params.id);
    // console.log(encomenda.id)
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
              <label htmlFor="recipients">Destinatário:</label>

              <select id="cars">
                {encomendas.map(encomenda => (
                  <option
                    value={encomenda.id}
                    key={encomenda.id}
                    selected={Number(match.params.id) === encomenda.id}
                  >
                    {encomenda.Recipient.nome}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="entregadores">Entregador:</label>

              <select id="cars">
                {entregadores.map(entregador => (
                  <option
                    value={entregador.id}
                    key={entregador.id}
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
            <input type="text" placeholder={productName} />
          </div>

          {/* <Input type="text" placeholder="Buscar por encomendas" id="" /> */}
        </Content>
      </PropForm>
    </Container>
  );
}
