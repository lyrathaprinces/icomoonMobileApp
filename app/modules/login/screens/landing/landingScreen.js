import React from 'react';
import type {
  Element as ReactElement,
} from 'react';
import {View, Text} from 'react-native';
import {Icon} from "@up-shared/components";

class LandingScreen extends React.PureComponent<any, any> {
  constructor(props: any) {
    super(props);
  }

  render(): ReactElement<any> {
    return (
      <View>
        <Icon 
          name="icon-share1"
          size={35}
          color="green"
        />
      </View>
    );
  }
}

export default LandingScreen;
