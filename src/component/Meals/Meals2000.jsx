
import React, {  useState } from "react";

import '../caloris.css';
import '../Buttons.css';

import MealsNormal from "../models/MealsList2000";
    

    const Meal=(props)=>{
        
        if(props.List===props.page+1){
            return(
                <>
                
                <div className="page">
                                    
                                <h3> <span>{props.Type}:</span>{props.name}</h3>
                                <div>
        
                        <div>
                            <h5>Ingredients </h5>
                        
                            {props.Ingredients}
                        
                        </div>
                        <div>
                            <h5>
                                Recipe
                            </h5>
                                {props.Recipe}                    
                        </div>
                        <button><a href="./getcalor.jsx" target="blank">Click here</a></button>
                    </div>
                    <div className="MealPhoto">
                    <img src={props.img} alt="" />
                    </div>

                </div>
            </>
        )
    }
}



function Meals2000() {
<></>
    {const [page, setPage] = useState(0);

    const totalPages = 3; // Example total number of pages

    const handleNext = () => {
        if (page < totalPages - 1) {
        setPage(page + 1);

    }
    };

    const handlePrevious = () => {
        if (page > 0) {
        setPage(page - 1);

    }
    };
        
        return (
        <>
        <div className="titt"id="headerr">
            <h2 >List<span> {page + 1}</span></h2>    
        </div>
            {MealsNormal.map((meal)=>(
                    <div>
                        <Meal List={meal.List} name={meal.name} Type={meal.Type} Ingredients={meal.Ingredients} Recipe={meal.Recipe} img={meal.img} page={page} totalPages={totalPages} handleNext={handleNext} handlePrevious={handlePrevious}/>
                    </div>
                ))}
                
                
                
        <body id='boddy'>
            <div className="buttons">
                <h1>Current Page: {page + 1}</h1>
                <div>
                    <a href="#header">
                    <button  class="cta-button"onClick={handlePrevious} disabled={page === 0}>
                        Previous
                    </button>
                    </a>
                    <a href="#header">
                    <button class="cta-button"onClick={handleNext} disabled={page === totalPages - 1}>
                        Next 
                    </button>
                    </a>
                </div>
            </div>
        </body>

    </> 
        );      
    }
};
export default Meals2000;