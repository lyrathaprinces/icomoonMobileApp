// @flow
import Realm from 'realm';

import createdCustomerAction from './actions/customerAction';
import CustomerModel from './models/customerModel';
import OrderModel from './models/orderModel';
import type{CustomerActionInterface} from './actions/customerAction';

const realmInstance = new Realm({
  schema: [CustomerModel, OrderModel],
});

/**
 * Get a singleton realm instance
 * @return {Realm}
 */
export const getRealmInstance = () => realmInstance;

/**
 * Available customer action
 * @type {CustomerActio nInterface}
 */
export const customerActions: CustomerActionInterface = createdCustomerAction(realmInstance);
