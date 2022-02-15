import React from "react";
import "./index.css";
import { Link } from "react-router-dom";

const Thumb = ({ id, title, src }) => {
  return (
    <div className="thumb">
      <Link to={`/location/${id}`} title={title} className="thumb-link">
        <div className="thumb-cover"></div>
        <img src={src} alt={title} />
        <h2>{title}</h2>
      </Link>
    </div>
  );
};

export default Thumb;
