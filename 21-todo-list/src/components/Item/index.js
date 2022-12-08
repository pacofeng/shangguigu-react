import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.css';

export default class Item extends Component {
  static propTypes = {
    updateTodo: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    done: PropTypes.bool.isRequired,
  };

  state = {
    isEnter: false,
  };

  handleMouse = (isEnter) => {
    this.setState({
      isEnter,
    });
  };

  handleChange = (id, event) => {
    this.props.updateTodo(id, event.target.checked);
  };

  handleDelete = (id) => {
    if (window.confirm('Are you sure delete?')) {
      this.props.deleteTodo(id);
    }
  };

  render() {
    const { id, name, done } = this.props;
    return (
      <li
        style={{ backgroundColor: this.state.isEnter ? '#ddd' : '#fff' }}
        onMouseEnter={() => this.handleMouse(true)}
        onMouseLeave={() => this.handleMouse(false)}
      >
        <label>
          <input
            type='checkbox'
            checked={done}
            onChange={(event) => this.handleChange(id, event)}
          />
          <span>{name}</span>
        </label>
        <button
          className='btn btn-danger'
          style={{ display: this.state.isEnter ? 'inline' : 'none' }}
          onClick={() => this.handleDelete(id)}
        >
          Delete
        </button>
      </li>
    );
  }
}
