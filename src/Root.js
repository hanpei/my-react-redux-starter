import React, { Component } from 'react';
import { Provider } from 'react-redux';

import routes from './routes';
import store from './store/store';

class Root extends Component {
  render() {
    return <Provider store={store}>{routes}</Provider>;
  }
}

export default Root;
