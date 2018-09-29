
// @flow
import React from 'react';
import {
  Text,
  View,
  Button,
} from 'react-native';
import type {
  Element as ReactElement,
} from 'react';

class LoginScreen extends React.PureComponent<any, any> {
  static defaultProps: any

  constructor(props: any) {
    super(props);
  }

  componentDidMount() {}

  render(): ReactElement<any> {
    const {navigate} = this.props.navigation;
    return (
      <View style={{flex: 1}}>
        <Text>Login Screen</Text>
        <Button
          onPress={() =>
            navigate('Register')
          }
          title="Go to Jane's profile"
        />
      </View>
    );
  }
}

LoginScreen.propTypes = {
};

LoginScreen.defaultProps = {
};

export default (LoginScreen);
