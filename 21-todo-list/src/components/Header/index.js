import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import './index.css';

export default class Header extends Component {
  static propTypes = {
    addTodo: PropTypes.func.isRequired,
  };

  handleKeyUp = (event) => {
    if (event.keyCode === 13 && event.target.value.trim() !== '') {
      this.props.addTodo({
        id: nanoid(),
        name: event.target.value,
        done: false,
      });

      event.target.value = '';
    }
  };
  render() {
    return (
      <div className='todo-header'>
        <input type='text' placeholder='add task' onKeyUp={this.handleKeyUp} />
      </div>
    );
  }
}
