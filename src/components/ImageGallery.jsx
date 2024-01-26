// src/components/ImageGallery.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addImage, deleteAllImages } from '../redux/Slices/imageSlice';
import ImageCard from './ImageCard';

const ImageGallery = () => {
  const dispatch = useDispatch();
  const images = useSelector((state) => state.images);

  const handleUploadImage = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        dispatch(addImage(reader.result));
      };

      reader.readAsDataURL(file);
    }
  };

  const handleDeleteAllImages = () => {
    dispatch(deleteAllImages());
  };

  return (
    <div className="container mx-auto mt-8">
      <div className="flex items-center space-x-4 mb-4">
        <input
          type="file"
          onChange={handleUploadImage}
          className="border rounded p-2 focus:outline-none"
        />
        <button
          onClick={handleDeleteAllImages}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Delete All Images
        </button>
      </div>
      <div className="flex flex-wrap">
        {images.map((image, index) => (
          <ImageCard key={index} image={image} index={index} />
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
