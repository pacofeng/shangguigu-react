import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './index.css';

export default class Footer extends Component {
  static propTypes = {
    deleteFinishedTodos: PropTypes.func.isRequired,
    updateAllTodosStatus: PropTypes.func.isRequired,
    todos: PropTypes.array.isRequired,
  };

  handleDeleteFinishedTodos = () => {
    this.props.deleteFinishedTodos();
  };

  handleSelectAllTotos = (event) => {
    this.props.updateAllTodosStatus(event.target.checked);
  };

  render() {
    const { todos } = this.props;
    const finishedTodos = todos.filter((todo) => todo.done);
    return (
      <div className='todo-footer'>
        <label>
          <input
            type='checkbox'
            checked={
              finishedTodos.length > 0 && finishedTodos.length === todos.length
            }
            onChange={(event) => this.handleSelectAllTotos(event)}
          />
        </label>
        <span>
          <span>Finished {finishedTodos.length}</span> / Total {todos.length}
        </span>
        <button
          className='btn btn-danger'
          onClick={this.handleDeleteFinishedTodos}
          disabled={finishedTodos.length === 0}
        >
          Delete finished tasks
        </button>
      </div>
    );
  }
}
