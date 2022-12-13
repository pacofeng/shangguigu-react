import React, { Component } from 'react';

export default class Child extends Component {
  // state = {
  //   users: [
  //     { id: 1, name: 'paco', age: 20 },
  //     { id: 2, name: 'feng', age: 22 },
  //     { id: 3, name: 'haipeng', age: 26 },
  //   ],
  // };

  state = {};
  render() {
    return (
      <div>
        I am Child
        <div>
          {this.state.users.map((person) => (
            <div key={person.id}>
              {person.name} - {person.age}
            </div>
          ))}
        </div>
      </div>
    );
  }
}
