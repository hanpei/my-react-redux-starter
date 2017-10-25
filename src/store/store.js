import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from '../reducers';

import customMiddlewares from '../middlewares';

export default function configureStore(initialState) {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // eslint-disable-line
  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(thunk, ...customMiddlewares)),
  );

  // // Hot reload reducers (requires Webpack or Browserify HMR to be enabled)
  // if (module.hot) {
  //   module.hot.accept('../reducers', () =>
  //     store.replaceReducer(require('../reducers').default)
  //   ); // eslint-disable-line
  // }

  return store;
}
