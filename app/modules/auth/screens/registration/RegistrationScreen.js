

// @flow
import React from 'react';
import {
  Text,
} from 'react-native';
import type {
  Element as ReactElement,
} from 'react';

class RegistrationScreen extends React.PureComponent<any, any> {
  static defaultProps: any

  constructor(props: any) {
    super(props);
  }

  componentDidMount() {}

  render(): ReactElement<any> {
    return (
      <Text>Register Screen</Text>
    );
  }
}

RegistrationScreen.propTypes = {
};

RegistrationScreen.defaultProps = {
};

export default RegistrationScreen;
