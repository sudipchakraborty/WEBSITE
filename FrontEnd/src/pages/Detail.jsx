// import React from 'react'
// import "./Detail.css"
// import { useLocation } from 'react-router-dom'
// import logo from '../images/laptop.jpg';

// const Detail = () => {
//   // const{state}=useLocation();
//   // const{label}= state;

//   return (
//     <div className='detailWrapper'>
      
//       <div className='imgWrapper'>
//         {/* <h1>{label}</h1> */}
//         <img src={logo} alt='food'></img>
//       </div>
//         <h4>NUTRIENTS</h4>
//         {/* <p>{state.totalWeight}</p> */}
//       <div>

//       </div>

      
//     </div>
//   )
// }

// export default Detail



import React from 'react'
import { useLocation } from 'react-router-dom'
import "./Detail.css"
import diet from "../assets/default_img.jpg"
import meal from "../assets/default_img.jpg"

const Detail = () => {
    const{state}=useLocation();
  return (
    <div className='detailWrapper'>
        <div className='imgWrapper'> 
            <h1> {state.label}</h1>
            <img src={diet} alt='food'/>   
        </div>

        <div className='bottomWrapper'>
        <div className='nutWrapper'>
            <h4>NUTRIENTS</h4>
            <p>
                {state.totalNutrients.CA.label}:{" "}
                {Math.round(state.totalNutrients.CA.quatlity)}
                {state.totalNutrients.CA.uint}     
            </p>

            <p>
                {state.totalNutrients.CHOCDF.label}:{" "}
                {Math.round(state.totalNutrients.CHOCDF.quatlity)}
                {state.totalNutrients.CHOCDF.uint}     
            </p>

            <p>
                {state.totalNutrients.CHOLE.label}:{" "}
                {Math.round(state.totalNutrients.CHOLE.quatlity)}
                {state.totalNutrients.CHOLE.uint}     
            </p>

            <p>
                {state.totalNutrients.ENERC_KCAL.label}:{" "}
                {Math.round(state.totalNutrients.ENERC_KCAL.quatlity)}
                {state.totalNutrients.ENERC_KCAL.uint}     
            </p>
            <p>{state.totalWeight}</p>
            <p>Calories: {Math.round(state.calories)}</p>
            {state.digest.slice(0,4).map((item,index)=>(
                <p key={index}>
                    {item.label}:{Math.round(item.total)}
                </p>
            ))}
        </div>
        <div className='mealImage'>
            <img src={meal} alt="meal" />
        </div>

        <div className='imgWrapper'>     
        </div>

       
            <h4>INGREDIENT</h4>
            {state.ingredientLines.map((ingredient,index)=>(
                <div>
                    <p>
                        {index+1}-{ingredient}
                    </p>
                </div>

            ))}
        </div>
</div>
  );
}

export default Detail;
