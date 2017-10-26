import { combineReducers } from 'redux';
import counterReducers from './counter/counterReducers';

export default combineReducers({
  counter: counterReducers,
});
