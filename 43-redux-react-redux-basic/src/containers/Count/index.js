import CountUI from '../../components/Count';
import { connect } from 'react-redux';
import {
  createIncrementAction,
  createDecrementAction,
  createIncrementAsyncAction,
} from '../../redux/count_action';

/*
  1. mapStateToProps返回值为object
  2. 返回值的key和value为ui组件props的key和value
  3. mapStateToProps用于传递state
*/
function mapStateToProps(state) {
  return {
    count: state,
  };
}

/*
  1. mapDispatchToProps返回值为object
  2. 返回值的key和value为ui组件props的key和value
  3. mapDispatchToProps用于传递操作state的方法
*/
function mapDispatchToProps(dispatch) {
  return {
    increment: (val) => {
      dispatch(createIncrementAction(val));
    },
    decrement: (val) => {
      dispatch(createDecrementAction(val));
    },
    incrementAsync: (val, time) => {
      dispatch(createIncrementAsyncAction(val, time));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CountUI);
