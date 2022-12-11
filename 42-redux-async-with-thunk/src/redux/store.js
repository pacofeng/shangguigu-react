/*
 *该文件专门用于暴露一个store对象，只有一个store
 *
 */
// import { configureStore } from '@reduxjs/toolkit';
import { createStore, applyMiddleware } from 'redux';
import counterReducer from './count_reducer';
import thunk from 'redux-thunk';

// export default configureStore({ reducer: counterReducer });
export default createStore(counterReducer, applyMiddleware(thunk));
