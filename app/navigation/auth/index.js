// @flow
import React from 'react';

import {createStackNavigator} from 'react-navigation';
import {connect} from 'react-redux';

import {ROUTES, AUTH_NAV_LOGIN} from './AuthNavigation.routes';

const STACK_NAVIGATOR_CONFIG = {
  initialRouteName: AUTH_NAV_LOGIN,
  headerMode: 'none',
  navigationOptions: {
    gesturesEnabled: false,
  },
};

export const AuthNavigation = createStackNavigator(ROUTES, STACK_NAVIGATOR_CONFIG);


type AuthNavigationProps = {};
type AuthNavigationState = {};

class AuthNavigationComponent extends React.PureComponent<AuthNavigationProps, AuthNavigationState> {
  constructor(props) {
    super(props);
    this.state={};
  }

  render() {
    return (
      <AuthNavigation />
    );
  }
}

AuthNavigationComponent.propTypes = {};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps)(AuthNavigationComponent);

