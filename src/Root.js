import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';
import routes from './routes';
import configureStore from './store/store';

const store = configureStore();

class Root extends Component {
  render() {
    // const { store } = this.props;
    // if (!this.routeConfig) this.routeConfig = routes; // hot-loader router error fix
    return (
      <Provider store={store}>
        <Router>
          {routes}
        </Router>
      </Provider>
    );
  }
}

export default Root;
