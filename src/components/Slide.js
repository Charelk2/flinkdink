import React from "react";

function Slide({ slide, onClick }) {
  return (
    <div className="slide" onClick={onClick}>
      <h2>{slide.headerTitle}</h2>
      <img src={slide.imageUrl} alt={slide.title} />
      <h2>{slide.title}</h2> {/* Title below the image */}
      <p>{slide.description}</p>
    </div>
  );
}

export default Slide;
