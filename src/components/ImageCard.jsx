// src/components/ImageCard.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteImage } from '../redux/Slices/imageSlice';

const ImageCard = ({ image, index }) => {
  const dispatch = useDispatch();

  const handleDeleteImage = () => {
    dispatch(deleteImage(index));
  };

  return (
    <div className="w-1/4 p-4">
      <div className="relative">
        <img src={image} alt="Uploaded" className="w-full h-32 object-cover mb-2 rounded" />
        <button
          onClick={handleDeleteImage}
          className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default ImageCard;
