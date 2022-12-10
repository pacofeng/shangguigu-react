import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Detail from './Deatil';

export default class Message extends Component {
  state = {
    messgaes: [
      { id: '1', title: 'message 1' },
      { id: '2', title: 'message 2' },
      { id: '3', title: 'message 3' },
    ],
  };

  replaceShow = (id, title) => {
    // params
    // this.props.history.replace(`/home/message/detail/${id}/${title}`);

    // search
    // this.props.history.replace(`/home/message/detail/?id=${id}&title=${title}`);

    // state
    this.props.history.replace(`/home/message/detail`, {
      id,
      title,
    });
  };

  pushShow = (id, title) => {
    // param
    // this.props.history.push(`/home/message/detail/${id}/${title}`);

    // search
    // this.props.history.push(`/home/message/detail/?id=${id}&title=${title}`);

    // state
    this.props.history.push(`/home/message/detail`, {
      id,
      title,
    });
  };

  goBack = () => {
    this.props.history.goBack();
  };

  goForward = () => {
    this.props.history.goForward();
  };

  go = () => {
    this.props.history.go(this.pageNumber.value);
  };

  render() {
    return (
      <>
        <ul>
          {this.state.messgaes.map((message) => (
            <div key={message.id}>
              <button onClick={() => this.pushShow(message.id, message.title)}>
                编程式路由跳转push
              </button>
              <button
                onClick={() => this.replaceShow(message.id, message.title)}
              >
                编程式路由跳转replace
              </button>
            </div>
          ))}
        </ul>
        <hr />

        {/* params */}
        {/* <Route path='/home/message/detail/:id/:title' component={Detail} /> */}

        {/* search or state */}
        <Route path='/home/message/detail' component={Detail} />

        <button onClick={this.goBack}>Back</button>
        <button onClick={this.goForward}>Forward</button>
        <div>
          <input ref={(current) => (this.pageNumber = current)} />
          <button onClick={this.go}>go</button>
        </div>
      </>
    );
  }
}
