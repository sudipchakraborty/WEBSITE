import React from 'react'
import "./Card_Recipe.css"
import default_img from "../assets/default_img.jpg"
import { useNavigate } from 'react-router-dom';

const Card_Recipe = ({recipes}) => {
    const navigate=useNavigate();
    // console.log(recipes);
  return (
    <div className='card_recipe'>
        {recipes.map(({recipe},index)=>{
            const {label}=recipe;
            return(
                <div className='cardWrapper' key={index}>
                    <h1>{label}</h1>
                    <img src={recipe.image} alt="food" />
                    <button onClick={()=>navigate("/Detail",{
                    state:recipe})}>
                        More Detail
                        </button>
                </div>
                );     
            })}
    </div>
    );
};

export default Card_Recipe
