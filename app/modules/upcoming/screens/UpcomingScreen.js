

// @flow
import React from 'react';
import {
  Text,
} from 'react-native';
import type {
  Element as ReactElement,
} from 'react';

import {Icon} from '@up-shared/components';

class UpcomingScreen extends React.PureComponent<any, any> {
  static defaultProps: any

  static navigationOptions: any = ({navigation}) => ({
    tabBarIcon: ({focused}) => (
      focused ?
        <Icon
          color="blue"
          name='asset-541'
          size={25}
        /> :
        <Icon
          color="gray"
          name='asset-541'
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
      <Text>Upcoming Screen</Text>
    );
  }
}

UpcomingScreen.propTypes = {
};

UpcomingScreen.defaultProps = {
};

export default UpcomingScreen;
