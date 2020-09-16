import React from "react";

import ImageGalleryItem from "./ImageGalleryItem";

const ImageGallery = ({ images, onClick }) => {
  return (
    <ul className="ImageGallery">
      {images.map(({ id, webformatURL, type, largeImageURL }) => (
        <ImageGalleryItem
          key={id}
          src={webformatURL}
          atl={type}
          largeImageURL={largeImageURL}
          onClick={onClick}
        />
      ))}
    </ul>
  );
};

export default ImageGallery;
