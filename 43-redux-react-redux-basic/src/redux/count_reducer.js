/*
  该文件用于创建一个为count组件服务的reducer，reducer的本质就是一个函数
  reducer函数会接收两个参数，分别为之前的状态(state)和动作对象(action)
*/

import { INCREMENT, DECREMENT } from './constant';

const initState = 0;

export default function counterReducer(state = initState, action) {
  const { type, data } = action;
  switch (type) {
    case INCREMENT:
      return state + data;
    case DECREMENT:
      return state - data;
    default:
      // 初始化
      return state;
  }
}
