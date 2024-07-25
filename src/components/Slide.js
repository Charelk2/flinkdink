// src/components/Slide.js
import React from "react";

function Slide({ slide }) {
  return (
    <div className="slide">
      <h2>{slide.title}</h2>
      <img src={slide.imageUrl} alt={slide.title} />
      <h2>{slide.title}</h2> {/* Title below the image */}
      <p>{slide.description}</p>
    </div>
  );
}

export default Slide;
