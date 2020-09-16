import React from "react";

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

export default ImageGalleryItem;
