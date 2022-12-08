import React, { Component } from 'react';
import axios from 'axios';
class App extends Component {
  onGetStudentsInfoClick = () => {
    axios.get('http://localhost:3000/students').then(
      (response) => {
        console.log('success', response.data);
      },
      (error) => {
        console.log('error', error);
      }
    );
  };
  render() {
    return (
      <div>
        <button onClick={this.onGetStudentsInfoClick}>Get students Info</button>
      </div>
    );
  }
}

export default App;
