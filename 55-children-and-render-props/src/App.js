import { Component } from 'react';
import AChildrenProps from './AChildrenProps';
import ARenderProps from './ARenderProps';
import B from './B';

class App extends Component {
  render() {
    return (
      <>
        <AChildrenProps>
          <B />
        </AChildrenProps>
        <ARenderProps render={(data) => <B data={data} />}></ARenderProps>
      </>
    );
  }
}

export default App;
