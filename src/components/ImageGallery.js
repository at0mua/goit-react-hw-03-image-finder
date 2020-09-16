import React from "react";
import PropTypes from "prop-types";

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

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      type: PropTypes.string,
      largeImageURL: PropTypes.string.isRequired,
    })
  ),
  onClick: PropTypes.func.isRequired,
};

export default ImageGallery;
