import React from "react";
import "./index.css";

const Banner = ({ imgSrc, imgAlt, imgContent }) => {
  return (
    <div className="banner">
      <div className="banner-cover"></div>
      <img src={imgSrc} alt={imgAlt} />
      {imgContent ? <h2>{imgContent}</h2> : null}
    </div>
  );
};

export default Banner;
