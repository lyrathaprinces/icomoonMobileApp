// @flow
import {StyleSheet} from 'react-native';

const GREEN = 'green';
const WHITE = 'white';
const RED = '#ff5830';
const GRAY = 'gray';
const BLACK2 = '#030303';
const YELLOW = '#ffd603';
const BLACK_GRAY= '#555555';
const COOL_WHITE = '#f4f4f4';

const buttonWrapper = {
  flex: 1,
  flexDirection: 'row',
  alignItems: 'center',
  color: BLACK2,
  margin: 5,
  width: 140,
  justifyContent: 'center',
  borderWidth: 1,
  borderColor: YELLOW,
  borderRadius: 5,
};
const buttonText = {
  fontWeight: 'bold',
  fontSize: 15,
  textAlign: 'center',
  paddingRight: 10,
  color: BLACK_GRAY,
};

const styles = StyleSheet.create({
  // --------MAIN--------
  wrapper: {
    flex: 1,
    padding: 5,
    backgroundColor: WHITE,
  },

  // --------HEADER SECTION START--------
  titleTextWrapper: {
    height: 50,
    backgroundColor: RED,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    fontSize: 20,
    color: WHITE,
  },
  speedText: {
    fontSize: 20,
    color: GREEN,
  },
  // --------HEADER SECTION END--------

  // --------ITEM MODIFICATION SECTION START--------

  // renderItemModifications()
  textInputWrapper: {
    paddingVertical: 10, flexDirection: 'row',
  },
  textInput: {
    flex: 3,
    height: 40,
    borderColor: GRAY,
    borderWidth: 1,
    margin: 5,
  },

  // renderAddItems()
  addItemWrapper: {
    ...buttonWrapper,
    backgroundColor: YELLOW,
  },
  addText: {
    ...buttonText,
  },

  // renderEditItems()
  editItemMainWrapper: {
    flex: 4,
    flexDirection: 'row',
  },
  editItemWrapper: {
    ...buttonWrapper,
    backgroundColor: YELLOW,
  },
  editText: {
    ...buttonText,
  },
  cancelItemWrapper: {
    ...buttonWrapper,
  },
  cancelItemText: {
    ...buttonText,
  },
  // -----ITEM MODIFICATION SECTION END ----------

  // -----ITEM LIST SECTION PART START -------------

  // renderFlatList()
  flatListWrapper: {
    flex: 1,
  },
  // renderListHeader()
  headerWrapper: {
    height: 50,
    backgroundColor: COOL_WHITE,
    width: '100%',
    alignItems: 'flex-start',
    paddingLeft: 10,
    justifyContent: 'center',
  },
  headerText: {
    color: BLACK2,
    fontSize: 20,
  },
});

export default styles;
