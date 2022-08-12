import { useState } from "react";
import { BsArrowDownLeftCircle } from "react-icons/bs";


function IngredientTally(props) {
  
  const ingredientList = [props]
  
  return (
  
      <div className="ingredient-tally-button">
        <h3> Ingredient Tally:</h3>

        {ingredientList.map((item) => {
          console.log(item, "in tally item")
          return (
            <>
              {" "}
              <p key={item.newIngredient} className="ingredient">
               { `${item.newIngredient}, ` }
              </p>{" "}
              <p key={item.quantity}>{item.quantity}</p>{" "}
            </>
          );
        })}

        <div className="down-left-button">
          <BsArrowDownLeftCircle />
        </div>
      </div>
    
  );
}

export default IngredientTally;
