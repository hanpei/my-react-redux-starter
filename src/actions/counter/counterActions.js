import { INCREMENT_COUNTER, DECREMENT_COUNTER, RESET_COUNTER } from '../../constants/ActionTypes';
import history from '../../utils/history';

export const increment = (num = 1) => ({
  type: INCREMENT_COUNTER,
  num,
});

export const decrement = (num = 1) => ({
  type: DECREMENT_COUNTER,
  num,
});

export const resetNumber = () => (dispatch) => {
  dispatch({
    type: RESET_COUNTER,
  });
  history.push('/test');
};
