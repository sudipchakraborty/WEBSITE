// Card.js
import React from 'react';
import { useHistory, useNavigate } from 'react-router-dom';
import './Card.css';

const Card = ({title, image, description}) => {
  
  const navigateToDetails = useNavigate();

    // const history = useHistory();

    // history.push('/details');
//  title, image, description

  return (
    <div className='card'>
      <div className="cardWrapper">
        <img src={image} alt={title}  />
          <div className="card-content">
          <h3 className="card-title">{title}</h3>
          <p className="card-description">{description}</p>
          {/* <button onClick={()=>navigateToDetails("/detail",{
            state:recipe})}>
              View Details
              </button> */}
          </div>
      </div>
    </div>
  );
};

export default Card;
