

// @flow
import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import type {
  Element as ReactElement,
} from 'react';
import PropTypes from 'prop-types';

import {ROOT_NAV_UPLOAD_VIDEO} from '../../../../navigation/root/RootNavigation.routes';

class HomeDetailScreen extends React.PureComponent<any, any> {
  static defaultProps: any

  constructor(props: any) {
    super(props);
  }

  componentDidMount() {}

  handleNavigateBack = () => {
    this.props.navigation.navigate(ROOT_NAV_UPLOAD_VIDEO);
  }

  render(): ReactElement<any> {
    return (
      <View>
        <Text>Home Detail screen</Text>
        <TouchableOpacity
          onPress={this.handleNavigateBack}
          style={{backgroundColor: 'red'}}
        >
          <Text style={{color: 'white'}}>Navigate To Home Detail Page</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

HomeDetailScreen.propTypes = {
  navigation: PropTypes.any.isRequired,
};

HomeDetailScreen.defaultProps = {
};

export default HomeDetailScreen;
