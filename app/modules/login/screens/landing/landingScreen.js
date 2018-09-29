import React from 'react';
import type {
  Element as ReactElement,
} from 'react';
import {View, Alert} from 'react-native';

import {BUTTON_PRESS} from '../../../../shared/strings';

import {Button} from '@up-shared/components';
import styles from './landing.styles';

class LandingScreen extends React.PureComponent<any, any> {
  constructor(props) {
    super(props);
  }

  handleButtonPress = () => {
    Alert.alert('Pressed!!');
  }

  render(): ReactElement<any> {
    return (
      <View style={styles.buttonWrapper}>
        <Button
          buttonStyle={styles.buttonStyle}
          buttonText={BUTTON_PRESS}
          onClick={this.handleButtonPress}
          textStyle={styles.textStyle}
        />
      </View>
    );
  }
}

export default LandingScreen;
