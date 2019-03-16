import React from 'react';
import type {
  Element as ReactElement,
} from 'react';
import {View, FlatList, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';

import {Icon} from '@up-shared/components';
import {customerActions} from '@up-storage/realm';

const dummyData = [
  {
    _id: 1,
    name: 'Asbar Ali',
    address: 'Colombo, Sri lanka',
    imageAddress: 'https://raw.githubusercontent.com/wix/react-native-navigation/master/.logo.png',
  },
  {
    _id: 2,
    name: 'Asbar Ali',
    address: 'Colombo, Sri lanka',
    imageAddress: 'https://raw.githubusercontent.com/wix/react-native-navigation/master/.logo.png',
  },
];
class LandingScreen extends React.PureComponent<any, any> {
  constructor(props: any) {
    super(props);
  }

  componentDidMount() {
    customerActions.saveCustomer({
      custId: 1,
      custName: 'Asbar Ali',
      address: 'Colombo, Sri lanka',
      custImageAddress: 'http:///blahhh',
    });
    const customerDetails = customerActions.retrieveAllCustomer();
    console.log('customerDetails', customerDetails);
  }

  onHandleKeyExtractor = ((item, key)=> {
    return key.toString();
  })

  renderHeader = () => {
    return (
      <View style={styles.headerWrapper}>
        <Text style={styles.customerHeader}>Customer Lists</Text>
      </View>
    );
  }

  renderListItem = (listItem) => {
    return (
      <TouchableOpacity
        key={listItem.item._id}
        style={styles.listItemWrapper}
      >
        <View style={styles.imageWrapper}>
          <Image
            source={{uri: listItem.item.imageAddress}}
            style={styles.image}
          />
        </View>
        <View style={styles.listTextWrapper}>
          <Text style={styles.title}>{listItem.item.name}</Text>
          <Text style={styles.description}>{listItem.item.address}</Text>
        </View>
        <View style={styles.iconWrapper}>
          <Icon
            color="black"
            name="circle-right"
            size={30}
          />
        </View>
      </TouchableOpacity>
    );
  }

  render(): ReactElement<any> {
    return (
      <View style={styles.container}>
        <FlatList
          ListHeaderComponent={this.renderHeader}
          data={dummyData}
          keyExtractor={this.onHandleKeyExtractor}
          renderItem={this.renderListItem}
        />
      </View>
    );
  }
}

const BORDER_COLOR = '#e4e4e4';
const TRANSPARENT_BLACK = 'rgba(3, 3, 3, 0.5)';
const BLACK = '#030303';
const GRAY = '#f4f4f4';

const styles = StyleSheet.create({
  container: {flex: 1, paddingTop: 30},
  listItemWrapper: {flex: 1, flexDirection: 'row', padding: 10},
  imageWrapper: {flex: 2},
  image: {width: 50, height: 50, borderRadius: 25},
  listTextWrapper: {flex: 7, justifyContent: 'center', borderBottomWidth: 1.2, borderColor: BORDER_COLOR},
  title: {fontSize: 18, color: BLACK},
  description: {color: TRANSPARENT_BLACK},
  iconWrapper: {flex: 1, justifyContent: 'center', borderBottomWidth: 1.2, borderColor: BORDER_COLOR},
  headerWrapper: {backgroundColor: GRAY, padding: 20},
  customerHeader: {fontSize: 24, color: BLACK},
});

export default LandingScreen;
