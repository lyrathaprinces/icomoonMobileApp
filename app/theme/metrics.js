// @flow
import {Dimensions} from 'react-native';

const {
  width,
  height,
} = Dimensions.get('window');

/**
 * Viewport width
 * @type {Number}
 */
export const viewportWidth = width;

/**
 * Viewport height
 * @type {Number}
 */
export const viewportHeight = height;

/**
 * App dimensions
 * @type {Object}
 */
export default {
  /**
   * Font sizes
   * @type {Object}
   */
  fontSize: {
    xxLarge: 30,
    xLarge: 24,
    large: 22,
    primary: 20,
    secondary: 16,
    medium: 14,
    small: 12,
    xSmall: 10,
    xxSmall: 8,
  },

  /**
   * Paddings
   * @type {Object}
   */
  padding: {
    default: {
      horizontal: 16,
      vertical: 16,
    },
    primary: {
      horizontal: 10,
      vertical: 10,
    },
    defaultButton: {
      horizontal: 10,
      vertical: 5,
    },
    actionBar: {
      horizontal: 10,
      vertical: 10,
    },
  },

  /**
   * Margins
   * @type {Object}
   */
  margin: {
    default: {
      horizontal: 5,
      vertical: 5,
    },
    extra1: {
      horizontal: 10,
      vertical: 10,
    },
  },

  /**
   * Tab bar metrics
   * @type {Object}
   */
  tabBar: {
    height: 50,
    iconSize: 35,
    tabPadding: 5,
    iconSmall: 10,
    iconMedium: 13,
    iconLarge: 20,
    tabWidth: 30,
    tabHeight: 29,
    bottomMargin: 4,
  },

  /**
   * Icon Size
   * @type number
   */
  iconSize: 25,

  /**
   * Avatar metrics
   * @type {Object}
   */
  avatar: {
    small: 35,
    medium: 60,
    large: 80,
  },

  /**
   * Avatar metrics
   * @type {Object}
   */
  borderRadius: {
    xSmall: 2,
    small: 4,
    medium: 10, // must adjust
    large: 20, // must adjust
  },

  /**
   * SpotMeButton
   * @type {Object}
   */
  button: {
    height: 40,
  },
};
