// @flow
import CustomerModel from '../models/customerModel';
import type {
  CustomerModelTypeInterface,
} from '../models/customerModel';

export default (realmInstance: any)=> {
  return {
    saveCustomer: (customerResponse: any): Promise<CustomerModel> => {
      const {custId, custName, address, custImageAddress} = customerResponse;
      return new Promise((resolve, reject) => {
        try {
          const customer = {
            _id: custId,
            name: custName,
            address: address,
            imageAddress: custImageAddress,
          };
          realmInstance.write(()=> {
            const createdCustomer = realmInstance.create(CustomerModel.getCustomerModelName(), customer, true);
            resolve(createdCustomer);
          });
        } catch (error) {
          resolve(error);
        }
      });
    },
    retrieveAllCustomer: (): CustomerModelTypeInterface => {
      return realmInstance.objects(CustomerModel.getCustomerModelName());
    },
  };
};
