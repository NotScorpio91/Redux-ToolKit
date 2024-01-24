import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteItem, startEditing, updateItem } from '../redux/Slices/Slice';

const TodoList = () => {
  const dispatch = useDispatch();
  const { items, editIndex } = useSelector((state) => state.todos);
  const [editedValue, setEditedValue] = React.useState('');

  return (
    <div>
      <ul>
        {items.map((item, index) => (
          <li
            key={index}
            onDoubleClick={() => {
              dispatch(startEditing(index));
              setEditedValue(item);
            }}
            className="flex items-center justify-between border p-2 mb-2 text-white"
          >
            {editIndex === index ? (
              <input
                type="text"
                value={editedValue}
                onChange={(e) => setEditedValue(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    e.preventDefault();
                    dispatch(updateItem(editedValue));
                    setEditedValue(''); // Reset edited value after dispatch
                  }
                }}
                className="border p-1 mr-2 text-black"
              />
            ) : (
              item
            )}
            <div>
              <button onClick={() => dispatch(startEditing(index))} className="bg-yellow-500 text-white p-2 mr-2">
                Edit
              </button>
              <button onClick={() => dispatch(deleteItem(index))} className="bg-red-500 text-white p-2">
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
