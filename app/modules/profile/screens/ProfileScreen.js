

// @flow
import React from 'react';
import {
  Text,
} from 'react-native';
import type {
  Element as ReactElement,
} from 'react';

import {Icon} from '@up-shared/components';

class ProfileScreen extends React.PureComponent<any, any> {
  static defaultProps: any

  static navigationOptions: any = ({navigation}) => ({
    tabBarIcon: ({focused}) => (
      focused ?
        <Icon
          color="blue"
          name='icon-plus1'
          size={25}
        /> :
        <Icon
          color="gray"
          name='icon-plus1'
          size={25}
        />
    ),
  });
  constructor(props: any) {
    super(props);
  }

  componentDidMount() {}

  render(): ReactElement<any> {
    return (
      <Text>Profile Screen</Text>
    );
  }
}

ProfileScreen.propTypes = {
};

ProfileScreen.defaultProps = {
};

export default ProfileScreen;
