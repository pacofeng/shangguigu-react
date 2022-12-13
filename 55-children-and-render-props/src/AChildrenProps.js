import React, { Component } from 'react';

export default class AChildrenProps extends Component {
  state = {
    name: 'Paco',
  };
  render() {
    return (
      <div>
        AChildrenProps no data {this.props.children} <hr />
      </div>
    );
  }
}
