import React, { Component } from 'react';

export default class Demo extends Component {
  state = {
    sum: 0,
  };

  onAddClick = () => {
    const { sum } = this.state;
    // 对象式的setState
    this.setState({ sum: sum + 1 }, () => {
      console.log(this.state.sum);
    });
  };

  onSubstractClick = () => {
    // 函数式的setState
    this.setState(
      (state, props) => ({
        sum: state.sum - 1,
      }),
      () => {
        console.log(this.state.sum);
      }
    );
  };

  render() {
    return (
      <div>
        sum: {this.state.sum} <button onClick={this.onAddClick}>add</button>
        <button onClick={this.onSubstractClick}>substract</button>
      </div>
    );
  }
}
