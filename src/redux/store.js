import { configureStore } from '@reduxjs/toolkit';
import imageReducer from './Slices/imageSlice';

export const store = configureStore({
  reducer: {
    images: imageReducer,
  },
});
