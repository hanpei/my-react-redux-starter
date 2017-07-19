import React from 'react';
import PropTypes from 'prop-types';

const CounterInput = ({ value, handleChange, handleFoucs, handleBlur }) => (
  <div>
    <input
      value={value}
      onChange={handleChange}
      onFocus={handleFoucs}
      onBlur={handleBlur}
      placeholder="输入数字"
    />
  </div>
);


CounterInput.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleFoucs: PropTypes.func.isRequired,
  handleBlur: PropTypes.func.isRequired,
};

export default CounterInput;
