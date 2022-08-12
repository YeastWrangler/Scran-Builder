import { useState } from "react";
import RecipeGenerator from "./RecipeGenerator";
import { BsArrowDownLeftCircle } from "react-icons/bs";


function IngredientTally(props) {
  console.log(props)
  const ingredientList = props.ingredientTally
 console.log(ingredientList, "in tally")
  //console.log("ingredient list", ingredientList)
  return (
      <div className="ingredient-tally-button">
        <h3> Ingredient Tally:</h3>
        <ul>
        {ingredientList.map((item) => {
          //console.log(item, "in tally item")
          return (<li id="tally-list" key={item}>
              <p  className="ingredient">
               {`${item}, `}
              </p>
              </li>
              );
            })}
            </ul>

        <div className="down-left-button">
          <BsArrowDownLeftCircle />
        </div>
    
        <div > 
       
        <RecipeGenerator ingredientList={ingredientList}/>
        </div>
        </div>
  );
}

export default IngredientTally;
