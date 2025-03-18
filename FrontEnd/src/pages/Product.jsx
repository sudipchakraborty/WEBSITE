
import React from 'react';
import Card from "../components/Card"
import './Product.css';

import logo from '../images/laptop.jpg';
import mp from '../images/money_plant.jpg';

 let imgs = [
  'https://res.cloudinary.com/stealthman22/image/upload/v1586308024/new-portfolio/hero/time-lapse-photography-of-waterfalls-during-sunset-210186.jpg',
  'https://res.cloudinary.com/stealthman22/image/upload/v1586308023/new-portfolio/hero/two-cargo-ships-sailing-near-city-2144905.jpg',
  logo,
  mp,
  'https://cdn.pixabay.com/photo/2017/07/31/17/12/water-2559064_1280.jpg',
  'https://cdn.pixabay.com/photo/2024/03/07/16/15/iceberg-8618870_640.jpg'
];


const Product = () => {
  const cardData = [
    {
      title: 'Laptop',
      image:imgs[0],
      description: 'This is a description for card 1.',
    },
    {
      title: 'Money Plant',
      image: imgs[1],
      description: 'This is a description for card 2.',
    },
    {
      title: 'Card Title 3',
      image: imgs[2],
      description: 'This is a description for card 3.',
    },
    {
      title: 'Card Title 3',
      image: imgs[3],
      description: 'This is a description for card 3.',
    },
    {
      title: 'Card Title 3',
      image: imgs[4],
      description: 'This is a description for card 3.',
    },
    {
      title: 'Card Title 3',
      image: imgs[5],
      description: 'This is a description for card 3.',
    },
  ];
  return (
    <div className="card-container">
      {cardData.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            image={card.image}
            description={card.description}
          />
        ))}
    </div>
  );
};

export default Product;