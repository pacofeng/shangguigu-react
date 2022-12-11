import React, { Component } from 'react';

export default class Count extends Component {
  state = { count: 0 };
  increment = () => {
    const { value } = this.selectedEle;
    const { count } = this.state;
    this.setState({
      count: count + Number(value),
    });
  };
  decrement = () => {
    const { value } = this.selectedEle;
    const { count } = this.state;
    this.setState({
      count: count - Number(value),
    });
  };
  incrementOdd = () => {
    const { value } = this.selectedEle;
    const { count } = this.state;
    if (count % 2 !== 0) {
      this.setState({
        count: count + Number(value),
      });
    }
  };
  incrementAsync = () => {
    const { value } = this.selectedEle;
    const { count } = this.state;
    setTimeout(() => {
      this.setState({
        count: count + Number(value),
      });
    }, 1000);
  };
  render() {
    return (
      <div>
        <h1>Sum: {this.state.count}</h1>
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
