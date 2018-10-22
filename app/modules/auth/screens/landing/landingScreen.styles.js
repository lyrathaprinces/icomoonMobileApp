// @flow
import {StyleSheet} from 'react-native';

const RED = 'red';
const GREEN = 'green';
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcomeText: {
    color: RED,
    fontSize: 25,
  },
  speedText: {
    fontSize: 20,
    color: GREEN,
  },
});

export default styles;
