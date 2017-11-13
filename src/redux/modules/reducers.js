import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import counterReducers from './counter';
import authReducers from './auth';

export default combineReducers({
  auth: authReducers,
  counter: counterReducers,
  router: routerReducer,
});
