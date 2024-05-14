import React from 'react';

const ImageGallery = () => {
  return (
    <div>
      <h1>Image Gallery</h1>
      <div className="image-container">
        <img src="my-app\images\image1.jpeg" alt="Image 1" />
        <img src="my-app\images\image2.jpeg" alt="Image 2" />
        <img src="my-app\images\image3.jpeg" alt="Image 3" />
        {/* Add more images as needed */}
      </div>
    </div>
  );
};

export default ImageGallery;