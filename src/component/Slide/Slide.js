import React from 'react';
import './Slide.css';

export const Slide = ({ currentImage }) => {
  return (
    <div className="slideshow-container">
      <img src={currentImage} alt="Slideshow" className="slide-image" />
    </div>
  );
};
