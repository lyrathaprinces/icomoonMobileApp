// @flow
import React from 'react';
import PropTypes from 'prop-types';
import {
  TouchableOpacity,
  Text,
} from 'react-native';

import styles from './Button.styles';

class Button extends React.PureComponent<any, any> {
  static defaultProps: any;
  constructor(props: any) {
    super(props);
    this.state = {
      disabled: false,
    };
  }

  handleOnPress = () => {
    this.setState({
      disabled: true,
    });
    this.props.onClick();
    setTimeout(() => {
      this.setState({
        disabled: false,
      });
    }, 500);
  }
  render() {
    const buttonStyle = this.props.default ? styles.defaultButtonStyle : styles.buttonStyle;
    const overridedButtonStyle = this.props.overrideDefaultButtonStyle ? this.props.buttonStyle : [buttonStyle, this.props.buttonStyle];
    const textStyle = this.props.overrideDefaultTextStyle ? this.props.textStyle : [styles.textStyle, this.props.textStyle];

    return (
      <TouchableOpacity
        disabled={this.props.isDisabled || this.state.disabled}
        onPress={this.handleOnPress}
        style={overridedButtonStyle}
      >
        <Text style={textStyle}>{this.props.buttonText}</Text>
      </TouchableOpacity>
    );
  }
}

Button.propTypes = {
  buttonStyle: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
  buttonText: PropTypes.string.isRequired,
  default: PropTypes.bool,
  isDisabled: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  overrideDefaultButtonStyle: PropTypes.bool,
  overrideDefaultTextStyle: PropTypes.bool,
  textStyle: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
};

Button.defaultProps = {
  buttonStyle: styles.buttonStyle,
  default: false,
  isDisabled: false,
  textStyle: styles.textStyle,
  overrideDefaultButtonStyle: false,
  overrideDefaultTextStyle: false,
  // onClick: () => {},
};

export default Button;
