import React, { Component } from 'react';

export default class B extends Component {
  render() {
    console.log(this.props);
    return <div>B: {this.props.data}</div>;
  }
}
