import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from '../pages/Login';
import Encomendas from '../pages/Encomendas';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/encomendas" component={Encomendas} />
    </Switch>
  );
}
