// @flow
import React from 'react';
import {
  Text,
  View,
} from 'react-native';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import type {
  Element as ReactElement,
} from 'react';

import {LoginDetailForm} from '../../forms';
import LoginActions from '../../actions/LoginActions';
import {navigateToRegistrationPage, navigateBack} from '@spotme-navigation/auth/AuthNavActions';

import {
  LOGIN,
  LOADING,
  UNABLE_TO_SIGN_IN,
} from '@spotme-shared/strings';


import styles from './LoginScreen.styles';

class LoginScreen extends React.PureComponent<any, any> {
  static defaultProps: any

  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      error: null,
      activeForm: false,
    };
  }

  componentWillReceiveProps(newProps) {
    this.setState(
      (prevState) => ({
        activeForm: this.resolveActiveFormStatus(newProps),
        isLoading: newProps.isLoading,
      })
    );
    this.resolveError(newProps);
  }

  resolveActiveFormStatus = (newProps: any) => {
    const {loginDetailForm} = newProps;
    return loginDetailForm ?
      ('active' in loginDetailForm) || (typeof loginDetailForm.values !== 'undefined') : false;
  }

  resolveError = (newProps: any): void => {
    if (this.props.error !== newProps.error) {
      this.setState({
        error: newProps.error,
      });
    }
  }
  handleLogin = (): void => {
    const {values: {email, password}} = this.props.loginDetailForm;
    this.props.dispatch(LoginActions.getLoginVerification(email, password));
  }

  handleSignUp = (): void => {
    let {screenProps: {fromWelcomeScreen}} = this.props;

    if (fromWelcomeScreen) {
      this.props.dispatch(navigateBack(this.props.navigation));
    } else {
      this.props.dispatch(navigateToRegistrationPage());
    }
  }

  renderSignInContent = (): ReactElement<any> => {
    const {activeForm, error} = this.state;
    let errorElement = null;
    if (error) {
      let message = error.messages && error.messages.length > 0 ? error.messages[0]:
        UNABLE_TO_SIGN_IN.toUpperCase();
      errorElement = (
        <View>
          <Text style={styles.errorText}>
            {message}
          </Text>
        </View>
      );
    }

    const buttonText = this.state.isLoading ? LOADING : LOGIN;
    return (
      <View style={styles.container} >
        <LoginDetailForm
          activeForm={activeForm}
          buttonText={buttonText}
          onHandleCreateAccount={this.handleSignUp}
          onHandleSubmit={this.handleLogin}
        />
        <View style={styles.errorDisplay}>
          {errorElement}
        </View>
      </View>
    );
  }

  render(): ReactElement<any> {
    const signInContent = this.renderSignInContent();
    return (
      signInContent
    );
  }
}

LoginScreen.propTypes = {
  dispatch: PropTypes.func.isRequired,
  error: PropTypes.any,
  loginDetailForm: PropTypes.any,
  navigation: PropTypes.any.isRequired,
  screenProps: PropTypes.any,
  token: PropTypes.any,
};

LoginScreen.defaultProps = {
  error: null,
  loginDetailForm: {},
  screenProps: {},
  token: null,
};

const mapStateToProps = (state, ownProps) => {
  return {
    isLoading: !!state.login.isLoading,
    token: state.login.data.token ? state.login.data.token : null,
    error: state.login.error ? state.login.error : null,
    loginDetailForm: state.form.loginDetail,
  };
};

export default connect(mapStateToProps)(LoginScreen);
