import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import Login from '../pages/Login';
import Encomendas from '../pages/Encomendas';
import Entregadores from '../pages/Entregadores';
import Destinatarios from '../pages/Destinatarios';
import Problemas from '../pages/Problemas';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/encomendas" component={Encomendas} isPrivate />
      <Route path="/entregadores" component={Entregadores} isPrivate />
      <Route path="/destinatarios" component={Destinatarios} isPrivate />
      <Route path="/problemas" component={Problemas} isPrivate />
    </Switch>
  );
}
