import { PureComponent } from 'react';

class ChildPureClass extends PureComponent {
  render() {
    console.log('render PureComponent...');
    return <div>this is PureComponent: {this.props.name}</div>;
  }
}

export default ChildPureClass;
