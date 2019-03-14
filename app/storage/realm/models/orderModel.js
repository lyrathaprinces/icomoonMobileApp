// @flow

/**
 * Order Model
 */
export default class OrderModel {
  /**
       * Getter of the class
       * @return {string} class name
       */
  static getOrderModelName() {
    return OrderModel.schema.name;
  }

  /**
     * Get the Order primary key
     * @return {string} return the primary key of the Order
     */
  static PrimaryKey() {
    return OrderModel.schema.primaryKey;
  }

      /**
       * class {realm} schema
       * @type {Object}
       */
      static schema = {
        'name': 'Order',
        'primaryKey': 'orderId',

        'properties': {
          'orderId': 'int',
          'productName': 'string',
        },
      }
}

/**
   * Order Model Flow type
   * @type {Object}
   */
export type OrderModelTypeInterface = {
    orderId: Number,
    productName: string,
}

