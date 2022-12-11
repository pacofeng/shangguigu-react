import React, { Component } from 'react';
import store from '../../redux/store';
import {
  createIncrementAction,
  createDecrementAction,
  createIncrementAsyncAction,
} from '../../redux/count_action';

export default class Count extends Component {
  // componentDidMount() {
  //   store.subscribe(() => {
  //     this.setState({});
  //   });
  // }

  increment = () => {
    const { value } = this.selectedEle;
    store.dispatch(createIncrementAction(Number(value)));
  };

  decrement = () => {
    const { value } = this.selectedEle;
    store.dispatch(createDecrementAction(Number(value)));
  };

  incrementOdd = () => {
    const { value } = this.selectedEle;
    const count = store.getState();
    if (count % 2 !== 0) {
      store.dispatch(createIncrementAction(Number(value)));
    }
  };
  incrementAsync = () => {
    const { value } = this.selectedEle;
    store.dispatch(createIncrementAsyncAction(Number(value), 1000));
  };
  render() {
    return (
      <div>
        <h1>Sum: {store.getState()}</h1>
        <select ref={(current) => (this.selectedEle = current)}>
          <option value='1'>1</option>
          <option value='2'>2</option>
          <option value='3'>3</option>
        </select>
        &nbsp;
        <button onClick={this.increment}>+</button>&nbsp;
        <button onClick={this.decrement}>-</button>&nbsp;
        <button onClick={this.incrementOdd}>add when odd</button>&nbsp;
        <button onClick={this.incrementAsync}>async add</button>&nbsp;
      </div>
    );
  }
}
