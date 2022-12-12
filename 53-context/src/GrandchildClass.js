import React, { Component } from 'react';
import MyContext from './MyContext';

class GrandchildClass extends Component {
  static contextType = MyContext;
  render() {
    return <div>this is GrandchildClass: {this.context.name}</div>;
  }
}

export default GrandchildClass;
