import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Header2 from '../components/Header2';
import home from "../assets/home.jpg"
import Card_Recipe from '../components/Card_Recipe';

const Home = () => {
  const [query,setQuery]=useState("egg");
  const[selectedMeal,setSelectedMeal]=useState("Breakfast");
  const [recipes,setRecipes]=useState("");

  const appid=process.env.REACT_APP_API_ID;
  const appKey=process.env.REACT_APP_API_KEY;

  const mealTypes=["Breakfast","Launch","Dinner","Snack","TeaTime"];

  const url=`https://api.edamam.com/search?q=${query}&
  app_id=${appid}&app_key=${appKey}&mealType=${selectedMeal}
  `;

  const getData=async()=>{
    try{
      const {data}=await axios(url);
      setRecipes(data.hits);
    }catch(error){
      console.log(error);
    }

  };
  
  console.log(recipes);

  // useEffect(()=>{
  //   getData();
  // },[]);

  return (
    <div>
     <Header2 
     query={query} 
     setQuery={setQuery}
     selectedMeal={selectedMeal}
     setSelectedMeal={setSelectedMeal}
     mealTypes={mealTypes}
     getData={getData}
     />
     {!recipes && <img className='homeImg' src={home} 
     alt='home'/>}
     {recipes?.length===0 && <h1>Sorry Try Another Food 
      Name</h1>}
      {
        recipes?.length>0 && <Card_Recipe  recipes={recipes}/>
      }
     
    </div>
  )
}

export default Home
