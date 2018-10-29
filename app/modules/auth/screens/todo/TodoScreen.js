import React from 'react';
import type {
  Element as ReactElement,
} from 'react';
import {View, Text, TextInput, TouchableOpacity, FlatList} from 'react-native';
import {connect} from 'react-redux';

import TodoActions from '../../actions/TodoActions';
import {Icon} from '@up-shared/components';

import styles from './Todo.styles';
import ItemListComponent from '../../components/ItemList.component';

class TodoScreen extends React.PureComponent<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      todoList: [{city: 'US/New York'}, {city: 'Sri Lanka/Colombo'}],
      editMode: true,
    };
  }

  componentDidMount() {
    this.props.dispatch(TodoActions.addTodoItem('New York'));
  }

  componentWillReceiveProps(newProps: any) {
    const {todo} = newProps;
    if (this.props.todo!=todo) {
      // this.setState({
      //   todoList: todo,
      // });
    }
  }

  // HEADER SECTION START
  renderHeader = () => {
    return (
      <View style={styles.titleTextWrapper}>
        <Text style={styles.titleText}>Todo Application</Text>
      </View>
    );
  }
  // HEADER SECTION END

  // ITEM MODIFICATION SECTION START
  renderItemModifications = () => {
    const {editMode} = this.state;
    const button = editMode ? this.renderEditButton() : this.renderAddButton();

    return (
      <View style={styles.textInputWrapper}>
        <TextInput
          onChangeText={this.handleOnChangeItem}
          style={styles.textInput}
          value={this.state.item}
        />
        {button}
      </View>
    );
  }

  renderAddButton = () => {
    return (
      <TouchableOpacity
        onPress={this.handleAddButton}
        style={styles.addItemWrapper}
      >
        <Text style={styles.addText}>ADD</Text>
        <Icon
          color='#555555'
          name="user-plus"
          size={20}
        />
      </TouchableOpacity>
    );
  }

  renderEditButton = () => {
    return (
      <View style={styles.editItemMainWrapper}>
        <TouchableOpacity
          onPress={this.handleEditButton}
          style={styles.editItemWrapper}
        >
          <Text style={styles.editText}>EDIT</Text>
          <Icon
            color='#555555'
            name="pencil"
            size={20}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={this.handleCancelButton}
          style={styles.cancelItemWrapper}
        >
          <Text style={styles.cancelItemText}>CANCEL</Text>
          <Icon
            color='#555555'
            name="cancel-circle"
            size={20}
          />
        </TouchableOpacity>
      </View>
    );
  }
  // ITEM MODIFICATION SECTION END

  renderFlatList = () => {
    return (
      <View style={styles.flatListWrapper}>
        <FlatList
          data={this.state.todoList}
          keyExtractor={this._keyExtractor}
          ListHeaderComponent={this.renderListHeader}
          renderItem={this.renderRow}
        />
      </View>
    );
  }

  renderRow = (cityObject) => {
    const {item, index} = cityObject;
    return (
      <ItemListComponent
        index={index}
        item={item}
      />
    );
  }

  renderListHeader = () => {
    return (
      <View style={styles.headerWrapper}>
        <Text style={styles.headerText}>Todo Lists</Text>
      </View>
    );
  }

  render(): ReactElement<any> {
    return (
      <View style={styles.container}>
        {this.renderHeader()}
        {this.renderItemModifications()}
        {this.renderFlatList()}
      </View>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    ...ownProps,
    todo: state.todo.todoList,
  };
};

export default connect(mapStateToProps)(TodoScreen);
