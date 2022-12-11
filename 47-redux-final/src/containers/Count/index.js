import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  increment,
  decrement,
  incrementAsync,
} from '../../redux/actions/count';

class Count extends Component {
  increment = () => {
    const { value } = this.selectedEle;
    this.props.increment(Number(value));
  };

  decrement = () => {
    const { value } = this.selectedEle;
    this.props.decrement(Number(value));
  };

  incrementOdd = () => {
    const { value } = this.selectedEle;
    const { count } = this.props;
    if (count % 2 !== 0) {
      this.props.increment(Number(value));
    }
  };

  incrementAsync = () => {
    const { value } = this.selectedEle;
    this.props.incrementAsync(Number(value), 1000);
  };

  render() {
    const { count } = this.props;
    return (
      <div>
        <h1>Sum: {count}</h1>
        <h2>Total person: {this.props.person.length}</h2>
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

const mapStateToProps = (state) => ({
  count: state.count,
  person: state.person,
});

// mapDispatchToProps简写，自动dispatch
const mapDispatchToProps = {
  increment,
  decrement,
  incrementAsync,
};

export default connect(mapStateToProps, mapDispatchToProps)(Count);
