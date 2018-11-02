import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

import {Icon} from '@up-shared/components';

import styles from './ItemList.style';

class ItemListComponent extends React.PureComponent<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
    };
  }

  handleEditMode = () => {
    this.props.handleListItemPress();
  }

  render() {
    const {item, index} = this.props;
    let cityArray = item && item.city.split('/');

    return (
      <TouchableOpacity
        key={`${index}`}
        onPress={this.handleEditMode}
        style={styles.rowContainer}
      >
        <View style={styles.rowTitleWrapper}>
          <Text
            style={styles.mainTitle}
          >
            {cityArray[0]}
          </Text>
          <Text>
            {cityArray[1]}
          </Text>
        </View>
        <View style={styles.deleteButtonMainWrapper}>
          <TouchableOpacity
            onPress={this.handleDeleteButton}
            style={styles.deleteButtonWrapper}
          >
            <Text style={styles.deleteText}>DELETE</Text>
            <Icon
              color='#ff5830'
              name="bin"
              size={20}
            />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    );
  }
}

export default ItemListComponent;
