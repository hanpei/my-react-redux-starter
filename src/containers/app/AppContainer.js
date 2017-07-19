import React from 'react';
import PropTypes from 'prop-types';

const AppContainer = ({ children }) => (
  <div>
    <h1>AppContainer</h1>
    {children}
  </div>
);

AppContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppContainer;
