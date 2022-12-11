/*
 *该文件专门用于暴露一个store对象，只有一个store
 *
 */
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './count_reducer';

export default configureStore({ reducer: counterReducer });
