// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './Slices/Slice';

const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
});

export default store;
