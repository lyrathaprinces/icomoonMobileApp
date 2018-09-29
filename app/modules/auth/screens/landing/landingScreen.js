import React from 'react';
import type {
  Element as ReactElement,
} from 'react';
import {View} from 'react-native';

import {Icon} from '@up-shared/components';

class LandingScreen extends React.PureComponent<any, any> {
  constructor(props: any) {
    super(props);
  }

  componentDidMount() {

  }

  render(): ReactElement<any> {
    return (
      <View>
        <Icon
          color="green"
          name="icon-share1"
          size={35}
        />
      </View>
    );
  }
}

export default LandingScreen;
