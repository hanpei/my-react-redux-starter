// types
const INCREMENT_COUNTER = 'counter/INCREMENT_COUNTER';
const DECREMENT_COUNTER = 'counter/DECREMENT_COUNTER';
const RESET_COUNTER = 'counter/RESET_COUNTER';

// actions
const increment = (num = 1) => ({ type: INCREMENT_COUNTER, num });
const decrement = (num = 1) => ({ type: DECREMENT_COUNTER, num });
const resetNumber = () => ({ type: RESET_COUNTER });

// reducers
function counter(state = 0, action) {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return state + action.num;
    case DECREMENT_COUNTER:
      return state - action.num;
    case RESET_COUNTER:
      return 0;
    default:
      return state;
  }
}

// exports
export default counter;
export const types = { INCREMENT_COUNTER, DECREMENT_COUNTER, RESET_COUNTER };
export const actions = { increment, decrement, resetNumber };
