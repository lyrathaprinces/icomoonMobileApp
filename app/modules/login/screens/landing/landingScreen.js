import React from 'react';
import type {
  Element as ReactElement,
} from 'react';
import {View} from 'react-native';

import {Icon} from '@up-shared/components';
import {customerActions} from '@up-storage/realm';

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

  render(): ReactElement<any> {
    return (
      <View>
        <Icon
          color="green"
          name="icon-share1"
          size={35}
        />
      </View>
    );
  }
}

export default LandingScreen;
