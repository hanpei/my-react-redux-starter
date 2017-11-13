import React from 'react';
import { HashRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import CounterContainer from './counter/CounterContainer';

export default (
  <Router>
    <Switch>
      <Route exact path="/" component={CounterContainer} />
      <Redirect to="/" />
    </Switch>
  </Router>
);
