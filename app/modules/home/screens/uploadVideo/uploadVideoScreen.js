

// @flow
import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import type {
  Element as ReactElement,
} from 'react';

class UploadVideoScreen extends React.PureComponent<any, any> {
  static defaultProps: any

  constructor(props: any) {
    super(props);
  }

  componentDidMount() {}

  handleNavigateBack = () => {
    this.props.navigation.popToTop();
  }

  render(): ReactElement<any> {
    return (
      <View>
        <Text>Home Detail screen</Text>
        <TouchableOpacity
          onPress={this.handleNavigateBack}
          style={{backgroundColor: 'green'}}
        >
          <Text style={{color: 'white'}}>Navigate To Top Stack</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

UploadVideoScreen.propTypes = {
};

UploadVideoScreen.defaultProps = {
};

export default UploadVideoScreen;
