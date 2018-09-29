

// @flow
import React from 'react';
import {
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import type {
  Element as ReactElement,
} from 'react';
import {connect} from 'react-redux';

import {Icon} from '@up-shared/components';
import {ROOT_NAV_HOME_DETAIL} from '../../../navigation/root/RootNavigation.routes';

class HomeScreen extends React.PureComponent<any, any> {
  static defaultProps: any

  static navigationOptions: any = ({navigation}) => ({
    tabBarIcon: ({focused}) => (
      focused ?
        <Icon
          color="blue"
          name='fill-1'
          size={25}
        /> :
        <Icon
          color="gray"
          name='fill-1'
          size={25}
        />
    ),
  });
  constructor(props: any) {
    super(props);
  }

  componentDidMount() {}

  handleNavigate = () => {
    this.props.navigation.navigate(ROOT_NAV_HOME_DETAIL);
  }

  render(): ReactElement<any> {
    return (
      <View>
        <Text>Home screen</Text>
        <TouchableOpacity
          onPress={this.handleNavigate}
          style={{backgroundColor: 'blue'}}
        >
          <Text style={{color: 'white'}}>Navigate To Home Detail Page</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

HomeScreen.propTypes = {
};

HomeScreen.defaultProps = {
};

const mapStateToProps = (state, ownProps) => {
  return {};
};

export default connect(mapStateToProps)(HomeScreen);
