import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import Detail from './Deatil';

export default class Message extends Component {
  state = {
    messgaes: [
      { id: '1', title: 'message 1' },
      { id: '2', title: 'message 2' },
      { id: '3', title: 'message 3' },
    ],
  };
  render() {
    return (
      <>
        <ul>
          {this.state.messgaes.map((message) => (
            <Link
              key={message.id}
              to={`/home/message/detail/${message.id}/${message.title}`}
            >
              {message.title}
            </Link>
          ))}
        </ul>
        <hr />
        <Route path='/home/message/detail/:id/:title' component={Detail} />
      </>
    );
  }
}
