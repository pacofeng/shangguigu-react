import React, { Component } from 'react';
import { connect } from 'react-redux';
import { nanoid } from 'nanoid';

import { createAddPersonAction } from '../../redux/actions/person_action';

class Person extends Component {
  state = {
    name: undefined,
    age: undefined,
  };

  onNameChange = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  onAgeChange = (event) => {
    this.setState({
      age: event.target.value,
    });
  };

  addPerson = () => {
    const { name, age } = this.state;

    this.props.addPerson({
      id: nanoid(),
      name,
      age,
    });
  };

  render() {
    console.log('state...');
    return (
      <div>
        <div>
          Name
          <input
            onChange={(event) => this.onNameChange(event)}
            type='text'
            placeholder='name'
          />
        </div>
        <div>
          Age
          <input
            type='text'
            onChange={(event) => this.onAgeChange(event)}
            placeholder='age'
          />
        </div>
        <button onClick={this.addPerson}>Submit</button>
        <div>
          {this.props.persons.map((person) => (
            <div key={person.id}>
              {person.name}-{person.age}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  persons: state.personReducer,
});

const mapDispatchToProps = {
  addPerson: createAddPersonAction,
};
export default connect(mapStateToProps, mapDispatchToProps)(Person);
