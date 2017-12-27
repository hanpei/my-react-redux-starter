import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware, { END } from 'redux-saga';
// import thunk from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';
import history from '../../utils/history';
import rootReducer from '../modules/reducers';
import customMiddlewares from '../middlewares';
import rootSaga from '../sagas/rootSaga';

function configureStore() {
  const initialState = {};
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware, routerMiddleware(history), ...customMiddlewares];

  const composeEnhancers =
    typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ // eslint-disable-line
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ // eslint-disable-line
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
      : compose;

  const enhancers = composeEnhancers(applyMiddleware(...middlewares));

  const store = createStore(rootReducer, initialState, enhancers);

  // run sagaMiddleware
  let sagaTask = sagaMiddleware.run(rootSaga);

  // Hot reload reducers (requires Webpack or Browserify HMR to be enabled)
  if (module.hot) {
    module.hot.accept('../modules/reducers', () => {
      const nextRootReducer = require('../modules/reducers').default; // eslint-disable-line
      store.replaceReducer(nextRootReducer);
    });

    module.hot.accept('../sagas/rootSaga', () => {
      const nextRootSaga = require('../sagas/rootSaga').default
      sagaTask.cancel();
      sagaTask.done.then(() => {
        sagaTask = sagaMiddleware.run(nextRootSaga);
      });
    });
  }

  return store;
}

export default configureStore();