import React from 'react';
import type {
  Element as ReactElement,
} from 'react';
import {View, Text} from 'react-native';
import styles from './landingScreen.styles';

import {measureConnectionSpeed} from '../../../../services/NetworkBandwith';

class LandingScreen extends React.PureComponent<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      networkSpeed: '',
    };
  }

  componentDidMount() {
    this.measureNetworkBandwith();
  }

  measureNetworkBandwith = async () : Promise<void> => {
    try {
      const networkSpeed = await measureConnectionSpeed();
      this.setState({
        networkSpeed,
      });
    } catch (error) {
      // handle error
    }
  }

  render(): ReactElement<any> {
    const {networkSpeed: {speed}} = this.state;

    return (
      <View style={styles.wrapper}>
        <Text style={styles.welcomeText}>Connection Speed :</Text>
        <Text style={styles.speedText}>{speed}MBps</Text>
      </View>
    );
  }
}

export default LandingScreen;
