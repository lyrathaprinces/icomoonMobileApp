// @flow
import {StyleSheet} from 'react-native';

const GRAY = '#979797';
const BLACK = '#030303';
const BLACK2 = '#555555';
const RED = '#ff5830';

const styles = StyleSheet.create({
  rowContainer: {
    flex: 1,
    flexDirection: 'row',
    width: '100%',
    borderBottomWidth: 1,
    borderColor: GRAY,
    alignItems: 'center',
    height: 60,
    marginTop: 5,
  },
  deleteButtonWrapper: {
    flex: 1,
    color: BLACK,
    borderColor: BLACK2,
    width: 110, margin: 10,
    justifyContent: 'center',
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 5,
  },
  rowTitleWrapper: {
    flex: 1,
    borderLeftWidth: 4,
    borderLeftColor: RED,
    padding: 3,
  },
  mainTitle: {
    fontSize: 22,
    color: BLACK,
    textAlignVertical: 'center',
  },
  deleteButtonMainWrapper: {
    flex: 1, alignItems: 'flex-end',
  },
  deleteText: {
    fontWeight: 'bold',
    fontSize: 15,
    textAlign: 'center',
    paddingRight: 10,
    color: BLACK2,
  },
});

export default styles;
