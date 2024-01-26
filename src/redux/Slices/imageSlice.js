import { createSlice } from '@reduxjs/toolkit';

export const imageSlice = createSlice({
  name: 'images',
  initialState: [],
  reducers: {
    addImage: (state, action) => {
      state.push(action.payload);
    },
    deleteImage: (state, action) => {
      return state.filter((_, index) => index !== action.payload);
    },
    deleteAllImages: () => [],
  },
});

export const { addImage, deleteImage, deleteAllImages } = imageSlice.actions;

export default imageSlice.reducer;
