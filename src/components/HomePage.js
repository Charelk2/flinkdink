import React from "react";
import "./Slideshow.css"; // Ensure this is correctly imported

function Slide({ slide }) {
  return (
    <div className="slide">
      <h2 className="header-title">{slide.headerTitle}</h2>
      <img src={slide.imageUrl} alt={slide.title} />
      <h1 className="title">{slide.title}</h1>
      <p className="description">{slide.description}</p>
    </div>
  );
}

export default Slide;
