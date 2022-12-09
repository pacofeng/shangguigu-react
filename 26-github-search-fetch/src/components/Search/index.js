import React, { Component } from 'react';
import PubSub from 'pubsub-js';

export default class Search extends Component {
  onSearchClick = async () => {
    // 获取用户的输入(连续解构赋值+重命名)
    const {
      keyWordEl: { value: keyWord },
    } = this;

    // 发送请求前通知List更新状态
    PubSub.publish('newSearchData', { showWelcome: false, isLoading: true });

    // 发送网络请求 promise 版本
    // fetch(`/api1/search/users?q=${keyWord}`)
    //   .then((response) => response.json())
    //   .then((data) => {
    //     // 请求成功后通知List更新状态
    //     PubSub.publish('newSearchData', {
    //       isLoading: false,
    //       users: data.items,
    //     });
    //   })
    //   .catch((error) => {
    //     // 请求失败后通知List更新状态
    //     PubSub.publish('newSearchData', {
    //       isLoading: false,
    //       err: error.message,
    //     });
    //   });

    // 发送网络请求 async/await 版本
    try {
      const response = await fetch(`/api1/search/users?q=${keyWord}`);
      const data = await response.json();
      // 请求成功后通知List更新状态
      PubSub.publish('newSearchData', {
        isLoading: false,
        users: data.items,
      });
    } catch (error) {
      // 请求失败后通知List更新状态
      PubSub.publish('newSearchData', {
        isLoading: false,
        err: error.message,
      });
    }
  };

  render() {
    return (
      <section className='jumbotron'>
        <h3 className='jumbotron-heading'>Search Github User</h3>
        <div>
          <input
            ref={(c) => (this.keyWordEl = c)}
            type='text'
            placeholder='输入关键词点击搜索'
          />
          &nbsp;
          <button onClick={this.onSearchClick}>Search</button>
        </div>
      </section>
    );
  }
}
