import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import AppContainer from './containers/app/AppContainer';

export default (
  <Router>
    <Route path="/" component={AppContainer} />
  </Router>
);
