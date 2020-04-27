import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import Login from '../pages/Login';
import Encomendas from '../pages/Encomendas';
import Entregadores from '../pages/Entregadores';
import Destinatarios from '../pages/Destinatarios';
import Problemas from '../pages/Problemas';

import EditEncomendas from '../pages/EditEncomendas';
import EditEntregadores from '../pages/EditEntregadores';
import EditDestinatarios from '../pages/EditDestinatarios';

import AddEncomendas from '../pages/AddEncomendas';
import AddEntregadores from '../pages/AddEntregadores';
import AddDestinatarios from '../pages/AddDestinatarios';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/encomendas" exact component={Encomendas} isPrivate />
      <Route path="/entregadores" exact component={Entregadores} isPrivate />
      <Route path="/destinatarios" exact component={Destinatarios} isPrivate />
      <Route path="/problemas" component={Problemas} isPrivate />

      {/* route with: match and query params */}
      <Route path="/encomendas/edit/:id" component={EditEncomendas} isPrivate />
      <Route
        path="/entregadores/edit/:id"
        component={EditEntregadores}
        isPrivate
      />
      <Route
        path="/destinatarios/edit/:id"
        component={EditDestinatarios}
        isPrivate
      />

      {/* adds */}
      <Route path="/encomendas/add" exact component={AddEncomendas} isPrivate />
      <Route
        path="/entregadores/add"
        exact
        component={AddEntregadores}
        isPrivate
      />
      <Route
        path="/destinatarios/add"
        exact
        component={AddDestinatarios}
        isPrivate
      />
    </Switch>
  );
}
