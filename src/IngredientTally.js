import { useState } from "react";
import { BsArrowDownLeftCircle } from "react-icons/bs";

function IngredientTally() {
  const ingredientToAdd = { ingredient: "bread", quantity: 3 };

  const [ingredientList, setIngredient] = useState([]);
  console.log(ingredientList);
  const handleClick = () => {
    setIngredient((currentIngredients) => {
      let ingredientArray = [...currentIngredients];
      //console.log(ingredientArray)
      ingredientArray.push(ingredientToAdd);
      return ingredientArray;
    });
  };
  return (
    <main class="ingredient-tally">
      <div class="ingredient-tally-button">
        <h3> Ingredient Tally:</h3>

        {ingredientList.map((item) => {
          return (
            <>
              {" "}
              <p key={item.ingredient} className="ingredient">
                {item.ingredient}
              </p>{" "}
              <p key={item.quantity}>{item.quantity}</p>{" "}
            </>
          );
        })}

        <button className="button" onClick={handleClick}>
          Click Here!
        </button>
        <div class="down-left-button">
          <BsArrowDownLeftCircle />
        </div>
      </div>
    </main>
  );
}

export default IngredientTally;
