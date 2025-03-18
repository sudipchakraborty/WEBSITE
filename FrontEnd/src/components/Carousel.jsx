// Carousel.js
import React, { useState } from 'react';
import './Carousel.css';

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const handleNextClick = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="carousel">
      <div className="carousel-inner">
        {images.map((image, index) => (
          <div
            className={`carousel-item ${index === currentIndex ? 'active' : ''}`}
            key={index}
          >
            <img src={image} alt={`Slide ${index}`} className="carousel-image" />
          </div>
        ))}
      </div>
      <button className="carousel-button prev" onClick={handlePrevClick}>
        &#10094;
      </button>
      <button className="carousel-button next" onClick={handleNextClick}>
        &#10095;
      </button>
    </div>
  );
};

export default Carousel;
