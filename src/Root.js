import React, { Component } from 'react';
import { Provider } from 'react-redux';

import routes from './routes/';
import store from './redux/store/store';
import rootSaga from './redux/sagas/rootSaga';

// const store = configureStore();
store.runSaga(rootSaga);

class Root extends Component {
  render() {
    return <Provider store={store}>{routes}</Provider>;
  }
}

export default Root;
