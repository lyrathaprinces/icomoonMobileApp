// @flow
import React from 'react';
import {createBottomTabNavigator} from 'react-navigation';
import {connect} from 'react-redux';

import {ROUTES, HOME_TAB_NAV} from './PrimaryTabNavigation.routes';

const NAV_CONFIG = {
  initialRouteName: HOME_TAB_NAV,
  tabBarOptions: {
    showLabel: false,
  },
};

export const PrimaryTabNavigation = createBottomTabNavigator(ROUTES, NAV_CONFIG);

type PrimaryTabNavigationProps = {};
type PrimaryTabNavigationState = {};

class PrimaryTabNavigationComponent extends React.PureComponent<PrimaryTabNavigationProps, PrimaryTabNavigationState> {
  static defaultProps: any

  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <PrimaryTabNavigation />
    );
  }
}

PrimaryTabNavigationComponent.propTypes = {};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps)(PrimaryTabNavigationComponent);
