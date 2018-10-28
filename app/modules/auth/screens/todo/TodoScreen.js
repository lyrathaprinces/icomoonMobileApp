import React from 'react';
import type {
  Element as ReactElement,
} from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';

import TodoActions from '../../actions/TodoActions';

import styles from './Todo.styles';

class TodoScreen extends React.PureComponent<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      todoList: [],
    };
  }

  componentDidMount() {
    this.props.dispatch(TodoActions.addTodoItem('New York'));
  }

  componentWillReceiveProps(newProps: any) {
    const {todo} = newProps;
    if (this.props.todo!=todo) {
      this.setState({
        todoList: todo,
      });
    }
  }

  render(): ReactElement<any> {
    return (
      <View style={styles.container}>
        <Text style={styles.welcomeText}>City: {this.state.todoList && this.state.todoList.city}</Text>
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
