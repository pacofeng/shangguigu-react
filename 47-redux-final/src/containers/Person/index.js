import React, { Component } from 'react';
import { connect } from 'react-redux';
import { nanoid } from 'nanoid';

import { addPerson } from '../../redux/actions/person';

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
          {this.props.person.map((p) => (
            <div key={p.id}>
              {p.name}-{p.age}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  person: state.person,
});

const mapDispatchToProps = {
  addPerson,
};
export default connect(mapStateToProps, mapDispatchToProps)(Person);
