import { combineReducers } from 'redux';

const testReducers = (state = {}, action) => state;

export default combineReducers({
  test: testReducers,
});
