// @flow
import React from 'react';
import {createStackNavigator} from 'react-navigation';
import {connect} from 'react-redux';
// import PropTypes from 'prop-types';

import {ROUTES, ROOT_NAV_ROOT} from './RootNavigation.routes';

// Navigation configurations
// See https://reactnavigation.org/docs/en/stack-navigator.html#stacknavigatorconfig
const NAV_CONFIG = {
  initialRouteName: ROOT_NAV_ROOT,
  headerMode: 'none',
  navigationOptions: {
    gesturesEnabled: false,
  },
};

export const RootNavigation = createStackNavigator(ROUTES, NAV_CONFIG);

type RootNavigationProps = {};
type RootNavigationState = {};

class RootNavigationComponent extends React.PureComponent<RootNavigationProps, RootNavigationState> {
  static defaultProps: any

  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <RootNavigation />
    );
  }
}

RootNavigationComponent.propTypes = {};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps)(RootNavigationComponent);
