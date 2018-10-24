import React from 'react';
import type {
  Element as ReactElement,
} from 'react';
import {View, Text, FlatList, TextInput, TouchableOpacity, Keyboard} from 'react-native';
import {connect} from 'react-redux';

import TodoActions from '../actions/TodoActions';
import {Icon} from '../../../../shared/components';
import ItemListComponent from '../components/ItemList.Component';

import styles from './TodoScreen.styles';

class TodoScreen extends React.PureComponent<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      editMode: false,
      cityLists: props.todoList,
      item: '',
      currentEditIndex: null,
    };
  }

  componentDidMount() {
  }

  componentWillReceiveProps(newProps: any) {
    this.setState({
      cityLists: newProps.todoList,
    });
  }

  handleOnChangeItem = (text: string) => {
    this.setState({
      item: text,
    });
  }

  handleAddButton = () => {
    if (this.state.item!='') {
      this.props.dispatch(TodoActions.addTodoItem(this.state.item));
      this.setState({
        item: '',
      });
      Keyboard.dismiss();
    }
  }

  handleCancelButton = () => {
    this.setState({
      editMode: false,
      item: '',
    });
    Keyboard.dismiss();
  }

  onHandleEditMode = (editStatus: boolean, item: any, currentEditIndex: number) => {
    this.setState({
      editMode: true,
      item: item.city,
      currentEditIndex,
    });
    Keyboard.dismiss();
  }

  onHandleDelete = (index) => {
    this.props.dispatch(TodoActions.deleteItem(index));
    Keyboard.dismiss();
  }

  handleEditButton = (index) => {
    this.props.dispatch(TodoActions.editItem(this.state.currentEditIndex, this.state.item));

    this.setState({
      editMode: false,
      item: '',
    });
    Keyboard.dismiss();
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
    const buttons = editMode? this.renderEditItems(): this.renderAddItems();

    return (
      <View style={styles.textInputWrapper}>
        <TextInput
          onChangeText={this.handleOnChangeItem}
          style={styles.textInput}
          value={this.state.item}
        />
        {buttons}
      </View>
    );
  }

  renderAddItems = () => {
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

  renderEditItems = () => {
    return (
      <View style={styles.editItemMainWrapper}>
        <TouchableOpacity
          onPress={this.handleEditButton}
          style={styles.editItemWrapper}
        >
          <Text style={styles.editText}>EDIT</Text>
          <Icon
            color='#555555'
            name="user-plus"
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
            name="user-plus"
            size={20}
          />
        </TouchableOpacity>
      </View>
    );
  }
  // ITEM MODIFICATION SECTION END

  // ITEM LIST SECTION PART START
  _keyExtractor = (item, index) => item.id;

  renderFlatList = () => {
    return (
      <View style={styles.flatListWrapper}>
        <FlatList
          data={this.state.cityLists}
          keyExtractor={this._keyExtractor}
          ListHeaderComponent={this.renderListHeader}
          renderItem={this.renderRow}
        />
      </View>
    );
  }

  renderListHeader = () => {
    return (
      <View style={styles.headerWrapper}>
        <Text style={styles.headerText}>Todo Lists</Text>
      </View>
    );
  }

  renderRow = (cityObject) => {
    const {item, index} = cityObject;
    return (
      <ItemListComponent
        handleDelete={this.onHandleDelete}
        handleEditMode={this.onHandleEditMode}
        index={index}
        item={item}
      />
    );
  }
  // ITEM LIST END

  render(): ReactElement<any> {
    return (
      <View style={styles.wrapper}>
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
    todoList: Object.assign([], state.todo.todoList),
  };
};

export default connect(mapStateToProps)(TodoScreen);
