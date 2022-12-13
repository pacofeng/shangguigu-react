import { Component } from 'react';
import ChildPureClass from './ChildPureClass';
import ChildClass from './ChildClass';
import ChildFunction from './ChildFunction';

class App extends Component {
  state = {
    name: 'Paco',
  };
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.name !== nextState.name;
  }
  render() {
    return (
      <>
        this is App: {this.state.name}
        <div>
          <button onClick={() => this.setState({ name: 'Feng' })}>Click</button>
        </div>
        <ChildPureClass />
        <ChildClass />
        <ChildFunction />
      </>
    );
  }
}

export default App;
