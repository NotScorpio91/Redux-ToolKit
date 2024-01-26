import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCard } from '../redux/features/cardsSlice';
import { deleteAllCards } from '../redux/features/cardsSlice';

const CardForm = () => {
  const dispatch = useDispatch();
  const cards = useSelector(state => state.cards);

  const [formData, setFormData] = useState({
    clientName: '',
    title: '',
    description: '',
    price: '',
    dueDate: '',
    createdDate: '',
    image: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, image: URL.createObjectURL(e.target.files[0]) });
  };

  const handleSubmit = () => {
    dispatch(addCard({ ...formData, id: Date.now() }));
    setFormData({
      clientName: '',
      title: '',
      description: '',
      price: '',
      dueDate: '',
      createdDate: '',
      image: '',
    });
  };

  const handleDeleteAll = () => {
    dispatch(deleteAllCards());
  };

  return (
    <div className="mb-4 flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-4">
      <div className="flex-grow md:w-1/6">
        <label className="block text-black mb-1">Client Name</label>
        <input
          type="text"
          name="clientName"
          value={formData.clientName}
          onChange={handleChange}
          className="w-full border rounded-md py-1 px-2 focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="flex-grow md:w-1/6">
        <label className="block text-black mb-1">Title</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          className="w-full border rounded-md py-1 px-2 focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="flex-grow md:w-1/6">
        <label className="block text-black mb-1">Description</label>
        <input
          type="text"
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="w-full border rounded-md py-1 px-2 focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="flex-grow md:w-1/6">
        <label className="block text-black mb-1">Price</label>
        <input
          type="text"
          name="price"
          value={formData.price}
          onChange={handleChange}
          className="w-full border rounded-md py-1 px-2 focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="flex-grow md:w-1/6">
        <label className="block text-black mb-1">Due Date</label>
        <input
          type="text"
          name="dueDate"
          value={formData.dueDate}
          onChange={handleChange}
          className="w-full border rounded-md py-1 px-2 focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="flex-grow md:w-1/6">
        <label className="block text-black mb-1">Created Date</label>
        <input
          type="text"
          name="createdDate"
          value={formData.createdDate}
          onChange={handleChange}
          className="w-full border rounded-md py-1 px-2 focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="flex-grow md:w-1/6">
        <label className="block text-black mb-1">Image</label>
        <input
          type="file"
          onChange={handleFileChange}
          className="w-full border rounded-md py-1 px-2 focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="flex-grow md:w-1/6">
        <button onClick={handleSubmit} className="bg-blue-500 text-white py-2 px-4 rounded-md focus:outline-none hover:bg-blue-700">
          Add Card
        </button>
      </div>
      {cards.length > 0 && (
        <div className="flex-grow md:w-1/6">
          <button onClick={handleDeleteAll} className="bg-red-500 text-white py-2 px-4 rounded-md focus:outline-none hover:bg-red-700">
            Delete All Cards
          </button>
        </div>
      )}
    </div>
  );
};

export default CardForm;
