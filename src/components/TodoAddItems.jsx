import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, updateItem, deleteAllItems, startEditing } from '../redux/Slices/Slice';

const TodoAddItems = () => {
  const dispatch = useDispatch();
  const { editIndex, items } = useSelector((state) => state.todos);
  const inputValue = editIndex !== null ? items[editIndex] : '';
  const [editedValue, setEditedValue] = React.useState(inputValue || '');

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (editIndex !== null) {
        dispatch(updateItem(editedValue || ''));
      } else {
        dispatch(addItem(editedValue || ''));
      }
      setEditedValue(''); // Reset edited value after dispatch
    }
  };

  return (
    <div className="flex mb-4">
      <input
        type="text"
        value={editedValue}
        onChange={(e) => setEditedValue(e.target.value)}
        className="border p-2 mr-2"
        placeholder="Type here..."
        onKeyDown={handleKeyPress}
      />
      <button onClick={() => dispatch(addItem(editedValue || ''))} className="bg-blue-500 text-white p-2">
        {editIndex !== null ? 'Update' : 'Add Item'}
      </button>
      <button onClick={() => dispatch(deleteAllItems())} className="bg-red-500 text-white p-2 ml-2">
        Delete All
      </button>
    </div>
  );
};

export default TodoAddItems;
