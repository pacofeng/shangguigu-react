import React, { Component } from 'react';
import { nanoid } from 'nanoid';

import Header from './components/Header';
import List from './components/List';
import Footer from './components/Footer';
import './App.css';

export default class App extends Component {
  state = {
    todos: [
      { id: nanoid(), name: 'Basketball', done: true },
      { id: nanoid(), name: 'Football', done: true },
      { id: nanoid(), name: 'Baminton', done: false },
    ],
  };

  addTodo = (item) => {
    this.setState({
      todos: [...this.state.todos, item],
    });
  };

  updateTodo = (id, done) => {
    const newTodos = this.state.todos.map((todo) => {
      if (todo.id === id) {
        todo.done = done;
      }
      return todo;
    });

    this.setState({
      todos: newTodos,
    });
  };

  deleteTodo = (id) => {
    const newTodos = this.state.todos.filter((todo) => {
      return todo.id !== id;
    });

    this.setState({
      todos: newTodos,
    });
  };

  deleteFinishedTodos = () => {
    const unfinishedTodos = this.state.todos.filter((todo) => {
      return !todo.done;
    });

    this.setState({
      todos: unfinishedTodos,
    });
  };

  updateAllTodosStatus = (done) => {
    const newTodos = this.state.todos.map((todo) => {
      todo.done = done;
      return todo;
    });

    this.setState({
      todos: newTodos,
    });
  };

  render() {
    return (
      <div className='todo-container'>
        <div className='todo-wrap'>
          <Header addTodo={this.addTodo} />
          <List
            todos={this.state.todos}
            updateTodo={this.updateTodo}
            deleteTodo={this.deleteTodo}
          />
          <Footer
            todos={this.state.todos}
            deleteFinishedTodos={this.deleteFinishedTodos}
            updateAllTodosStatus={this.updateAllTodosStatus}
          />
        </div>
      </div>
    );
  }
}
