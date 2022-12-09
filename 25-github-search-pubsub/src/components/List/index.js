import React, { Component } from 'react';
import PubSub from 'pubsub-js';
import './index.css';

export default class List extends Component {
  state = {
    //初始化状态
    users: [], //users初始值为数组
    showWelcome: true, //是否为第一次打开页面
    isLoading: false, //标识是否处于加载中
    err: '', //存储请求相关的错误信息
  };

  componentDidMount() {
    this.token = PubSub.subscribe('newSearchData', (_msg, data) => {
      this.setState({ ...data });
    });
  }

  componentWillUnmount() {
    PubSub.unsubscribe(this.token);
  }

  //更新App的state
  updateAppState = (stateObj) => {
    this.setState(stateObj);
  };

  render() {
    const { users, showWelcome, isLoading, err } = this.state;
    return (
      <div className='row'>
        {showWelcome ? (
          <p>Enter user name and click search</p>
        ) : isLoading ? (
          <p>Loading......</p>
        ) : err ? (
          <h2 style={{ color: 'red' }}>{err}</h2>
        ) : (
          users.map((userObj) => {
            return (
              <div key={userObj.id} className='card'>
                <a rel='noreferrer' href={userObj.html_url} target='_blank'>
                  <img
                    alt='head_portrait'
                    src={userObj.avatar_url}
                    style={{ width: '100px' }}
                  />
                </a>
                <p className='card-text'>{userObj.login}</p>
              </div>
            );
          })
        )}
      </div>
    );
  }
}
