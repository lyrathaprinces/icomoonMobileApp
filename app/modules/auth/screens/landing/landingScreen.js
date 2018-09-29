import React from 'react';
import type {
  Element as ReactElement,
} from 'react';
import {View} from 'react-native';
import {connect} from 'react-redux';

import AuthNavigationComponent from '../../../../navigation/auth';
import {RootNavigation} from '../../../../navigation/root';
import styles from './landingScreen.styles';

class LandingScreen extends React.PureComponent<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      isLoggedIn: false,
    };
  }

  componentDidMount() {

  }

  renderAuthNav = (): ReactElement<any> => {
    return <AuthNavigationComponent />;
  }

  renderRootNav = (): ReactElement<any> => {
    return <RootNavigation />;
  }

  render(): ReactElement<any> {
    const renderNavigation = this.state.isLoggedIn? this.renderRootNav(): this.renderAuthNav();
    return (
      <View style={styles.container}>
        {renderNavigation}
      </View>
    );
  }
}

LandingScreen.propTypes = {
};

LandingScreen.defaultProps = {
};

const mapStateToProps = (state, ownProps) => {
  return {
    profile: state.profile,
  };
};

export default connect(mapStateToProps)(LandingScreen);
