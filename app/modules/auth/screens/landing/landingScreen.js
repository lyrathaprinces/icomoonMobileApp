import React from 'react';
import type {
  Element as ReactElement,
} from 'react';
import {View, Text} from 'react-native';

class LandingScreen extends React.PureComponent<any, any> {
  constructor(props: any) {
    super(props);
  }

  componentDidMount() {}

  render(): ReactElement<any> {
    return (
      <View>
        <Text>LandingScreen</Text>
      </View>
    );
  }
}

export default LandingScreen;
