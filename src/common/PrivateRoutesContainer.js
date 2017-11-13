import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { actions } from '../redux/modules/auth';

class PrivateRoutes extends Component {
  static propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired,
    path: PropTypes.string.isRequired,
    checkTokenFromLocalStorage: PropTypes.func.isRequired,
  };

  componentWillMount() {
    // 刷新后检查localStorage中的token
    if (!this.props.isAuthenticated) {
      this.props.checkTokenFromLocalStorage();
    }
  }

  render() {
    const { path, component, ...rest } = this.props;
    return this.props.isAuthenticated ? (
      <Route path={path} component={component} {...rest} />
    ) : (
      <Redirect to="/login" />
    );
  }
}

const mapStateToProps = ({ auth }) => ({
  isAuthenticated: auth.isAuthenticated,
});

const { checkTokenFromLocalStorage } = actions;
const PrivateRoutesContainer = connect(mapStateToProps, {
  checkTokenFromLocalStorage,
})(PrivateRoutes);

export default PrivateRoutesContainer;
