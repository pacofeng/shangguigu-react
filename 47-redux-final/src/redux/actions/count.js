import { INCREMENT, DECREMENT } from '../constant';

// 同步action： 返回对象
export const increment = (data) => ({ type: INCREMENT, data });
export const decrement = (data) => ({ type: DECREMENT, data });

// 移步action：返回函数, 异步action中会调用同步action
export const incrementAsync = (data, time) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(increment(data));
    }, time);
  };
};
