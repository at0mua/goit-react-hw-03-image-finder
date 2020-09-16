import React from "react";
import PropTypes from "prop-types";

const ImageGalleryItem = ({ src, alt, largeImageURL, onClick }) => {
  const getImgData = () => onClick(largeImageURL, alt);

  return (
    <li className="ImageGalleryItem">
      <img
        src={src}
        alt={alt}
        className="ImageGalleryItem-image"
        onClick={getImgData}
      />
    </li>
  );
};

ImageGalleryItem.defaultProps = {
  alt: "image",
};

ImageGalleryItem.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  largeImageURL: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
