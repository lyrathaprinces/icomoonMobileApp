import {
  StyleSheet,
} from 'react-native';
import colors from '../../../../theme/colors';
import {container} from '../../../../theme/base';

const styles = StyleSheet.create({
  container: {
    ...container,
    flex: 1,
    backgroundColor: colors.background.lightYellow,
  },
  errorText: {
    color: colors.font.white,
    padding: 10,
  },
  errorDisplay: {
    alignItems: 'center',
    backgroundColor: colors.background.black,
  },
});
export default styles;

