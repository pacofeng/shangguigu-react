import React, { Component } from 'react';
import './index.css';
import PropTypes from 'prop-types';
import Item from '../Item';

export default class List extends Component {
  static propTypes = {
    todos: PropTypes.array.isRequired,
    updateTodo: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired,
  };

  render() {
    const { todos } = this.props;
    return (
      <ul className='todo-main'>
        {todos.map((todo) => (
          <Item
            key={todo.id}
            {...todo}
            updateTodo={this.props.updateTodo}
            deleteTodo={this.props.deleteTodo}
          />
        ))}
      </ul>
    );
  }
}
