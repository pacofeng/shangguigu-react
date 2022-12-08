import React, { Component } from 'react';
import axios from 'axios';
class App extends Component {
  onGetStudentsInfoClick = () => {
    axios.get('http://localhost:3000/api1/students').then(
      (response) => {
        console.log('success', response.data);
      },
      (error) => {
        console.log('error', error);
      }
    );
  };

  onGetCarsInfoClick = () => {
    axios.get('http://localhost:3000/api2/cars').then(
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
        <button onClick={this.onGetStudentsInfoClick}>Get Students Info</button>
        <button onClick={this.onGetCarsInfoClick}>Get Cars Info</button>
      </div>
    );
  }
}

export default App;
