import {StyleSheet, PixelRatio} from 'react-native';

import colors from '../../../theme/colors';
import metrics from '../../../theme/metrics';

const styles = StyleSheet.create({
  buttonStyle: {
    paddingHorizontal: metrics.padding.defaultButton.horizontal,
    paddingVertical: metrics.padding.defaultButton.vertical,
    borderRadius: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  defaultButtonStyle: {
    paddingHorizontal: metrics.padding.defaultButton.horizontal,
    paddingVertical: metrics.padding.defaultButton.vertical,
    borderRadius: 2,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1 / PixelRatio.get(),
  },
  textStyle: {
    color: colors.background.black,
  },
});

export default styles;
