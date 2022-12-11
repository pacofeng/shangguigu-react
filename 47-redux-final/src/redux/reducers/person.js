import { ADD_PERSON } from '../constant';

const initState = [{ id: '1', name: 'paco', age: 30 }];
export default function personReducer(state = initState, action) {
  const { type, data } = action;
  switch (type) {
    case ADD_PERSON:
      return [...state, data];
    default:
      // 初始化
      return state;
  }
}
