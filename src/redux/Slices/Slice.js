import { createSlice } from '@reduxjs/toolkit';

const Slice = createSlice({
  name: 'todos',
  initialState: {
    items: [],
    editIndex: null,
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
      state.editIndex = null;
    },
    updateItem: (state, action) => {
      if (state.editIndex !== null) {
        state.items = state.items.map((item, index) =>
          index === state.editIndex ? action.payload : item
        );
        state.editIndex = null;
      }
    },
    deleteItem: (state, action) => {
      state.items.splice(action.payload, 1);
      state.editIndex = null;
    },
    deleteAllItems: (state) => {
      state.items = [];
      state.editIndex = null;
    },
    startEditing: (state, action) => {
      state.editIndex = action.payload;
    },
  },
});

export const { addItem, updateItem, deleteItem, deleteAllItems, startEditing } = Slice.actions;
export default Slice.reducer;
