import React, { Component } from 'react';

export default class ARenderProps extends Component {
  state = {
    name: 'Paco',
  };
  render() {
    return (
      <div>ARenderProps with data {this.props.render(this.state.name)}</div>
    );
  }
}
