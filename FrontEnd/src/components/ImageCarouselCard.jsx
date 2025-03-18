import React from 'react';
import Slider from 'react-slick';
import './ImageCarouselCard.css'; // Import the CSS file

// Import local images
import image1 from '../assets/image1.jpg';
import image2 from '../assets/image2.jpg';
import image3 from '../assets/image3.jpg';
import image4 from '../assets/image4.jpg';
import image5 from '../assets/image5.jpg';

const ImageCarouselCard = () => {
  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
  ];

  // Slick carousel settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="carousel-card">
      <h3 className="carousel-title">Image Carousel</h3>
      <div className="carousel-container">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index}>
              <img src={image} alt={`Carousel ${index}`} className="carousel-image" />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ImageCarouselCard;
