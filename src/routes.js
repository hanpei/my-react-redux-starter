import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import AppContainer from './containers/app/AppContainer';
import CounterContainer from './containers/counter/CounterContainer';

export default (
  <Router>
    <Switch>
      <Route exact path="/" component={AppContainer} />
      <Route exact path="/counter" component={CounterContainer} />
    </Switch>
  </Router>
);
