import React from "react";

function Slide({ slide, onClick }) {
  const handleFullscreen = () => {
    const element = document.querySelector(".slide img");
    if (element.requestFullscreen) {
      element.requestFullscreen();
    } else if (element.mozRequestFullScreen) {
      /* Firefox */
      element.mozRequestFullScreen();
    } else if (element.webkitRequestFullscreen) {
      /* Chrome, Safari and Opera */
      element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) {
      /* IE/Edge */
      element.msRequestFullscreen();
    }
  };

  return (
    <div className="slide" onClick={onClick}>
      <h2>{slide.headerTitle}</h2>
      <img
        src={slide.imageUrl}
        alt={slide.title}
        onClick={(e) => {
          e.stopPropagation(); // Prevents triggering the onClick for the parent div
          handleFullscreen(); // Handle fullscreen when image is clicked
        }}
      />
      <h2>{slide.title}</h2> {/* Title below the image */}
      <p>{slide.description}</p>
    </div>
  );
}

export default Slide;
