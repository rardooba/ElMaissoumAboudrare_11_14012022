import React, { useState } from "react";
import "./index.css";

const Gallery = ({ images }) => {
  //define picture index
  const [currentPicture, setCurrentPicture] = useState(0);

  return (
    <div className="gallery">
      <img src={images[currentPicture]} alt={`location`} />
      
      <span className="counter">
        {`${currentPicture + 1}/${images.length}`}
      </span>

      {images.length > 1 && (
        <span
          className="fas fa-chevron-left"
          onClick={() =>
            setCurrentPicture(
              currentPicture === 0 ? images.length - 1 : currentPicture - 1
            )
          }
        ></span>
      )}
      {images.length > 1 && (
        <span
          className="fas fa-chevron-right"
          onClick={() =>
            setCurrentPicture(
              currentPicture === images.length - 1 ? 0 : currentPicture + 1
            )
          }
        ></span>
      )}
    </div>
  );
};

export default Gallery;
