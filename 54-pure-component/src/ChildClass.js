import { Component } from 'react';

class ChildClass extends Component {
  shouldComponentUpdate(nextProps) {
    return nextProps.name !== this.props.name;
  }

  render() {
    console.log('render ChildClass...');
    return <div>this is ChildClass: {this.props.name}</div>;
  }
}

export default ChildClass;
