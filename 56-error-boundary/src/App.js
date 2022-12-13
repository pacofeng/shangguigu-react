import { Component } from 'react';
import Child from './Child';

class App extends Component {
  state = {
    error: null,
  };
  // 捕获后代组件的错误
  static getDerivedStateFromError(error) {
    return { error };
  }

  componentDidCatch(error, info) {
    // 统计页面的错误。发送请求发送到后台去
    console.log('error', error);
    console.log('info', info);
  }

  render() {
    return (
      <>
        I am App
        <hr />
        {this.state.error ? <div>there is an error</div> : <Child />}
      </>
    );
  }
}

export default App;
