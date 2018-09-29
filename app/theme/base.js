// @flow

import colors from './colors';
import metrics from './metrics';

/**
 * Base container
 * @type {Object}
 */
export const container = {
  backgroundColor: colors.background.white,
  padding: 10,
};

/**
 * Padded container
 * @type {Object}
 */
export const paddedContainer = {
  ...container,

  paddingTop: metrics.padding.default.vertical,
  paddingBottom: metrics.padding.default.vertical,
  paddingLeft: metrics.padding.default.horizontal,
  paddingRight: metrics.padding.default.horizontal,
};

export const titleText = {
  fontSize: metrics.fontSize.xLarge,
  color: colors.font.primary,
};


