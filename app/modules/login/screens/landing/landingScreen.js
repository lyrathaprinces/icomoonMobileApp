import React from 'react';
import type {
  Element as ReactElement,
} from 'react';
import {View, Text} from 'react-native';

class LandingScreen extends React.PureComponent<any, any> {
  constructor(props: any) {
    super(props);
  }

  render(): ReactElement<any> {
    return (
      <View>
        <Text>Icomoon Component</Text>
      </View>
    );
  }
}

export default LandingScreen;
