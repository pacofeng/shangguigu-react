/*
 *该文件专门用于暴露一个store对象，只有一个store
 *
 */
// import { configureStore } from '@reduxjs/toolkit';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import counterReducer from './reducers/count_reducer';
import personReducer from './reducers/person_reducer';
import thunk from 'redux-thunk';

// export default configureStore({ reducer: counterReducer });
const reducers = combineReducers({
  counterReducer,
  personReducer,
});
export default createStore(reducers, applyMiddleware(thunk));
