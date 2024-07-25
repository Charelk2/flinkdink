import React, { useState, useEffect } from "react";
import Slide from "./Slide";
import slides from "../data/slides";

function Slideshow({ term, week, onComplete }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Filter slides based on the specified term and week
  const weekSlides = slides.filter((slide) => slide.term === term && slide.week === week);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % weekSlides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? weekSlides.length - 1 : prevIndex - 1));
  };

  const handleKeyDown = (event) => {
    if (event.key === "ArrowRight") {
      nextSlide();
    } else if (event.key === "ArrowLeft") {
      prevSlide();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="slideshow-container">
      <button onClick={prevSlide} disabled={weekSlides.length === 0}>
        Previous
      </button>
      {weekSlides.length > 0 ? (
        <Slide slide={weekSlides[currentIndex]} />
      ) : (
        <div>No slides available for this week.</div>
      )}
      <button onClick={nextSlide} disabled={weekSlides.length === 0}>
        Next
      </button>
      <button onClick={() => onComplete(term, week)}>Complete Week</button>
    </div>
  );
}

export default Slideshow;
