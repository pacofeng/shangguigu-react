import React, { Component } from 'react';
import { Button, DatePicker } from 'antd';
import {
  WechatOutlined,
  WeiboOutlined,
  SearchOutlined,
} from '@ant-design/icons';

const { RangePicker } = DatePicker;
class App extends Component {
  render() {
    return (
      <div>
        <Button type='primary' icon={<SearchOutlined />}>
          Primary button
        </Button>
        <WechatOutlined />
        <WeiboOutlined />
        <DatePicker />
        <RangePicker />
      </div>
    );
  }
}

export default App;
