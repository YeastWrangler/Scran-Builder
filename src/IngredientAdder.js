import { BsArrowUpRightCircle } from "react-icons/bs";
import { useState } from "react";
import IngredientTally from "./IngredientTally";

const IngredientAdder = () => {
  const [newIngredient, setNewIngredients] = useState([]);
  const [ingredientTally, setIngredientTally] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();

    setIngredientTally((currentIngredients) => {
      console.log(newIngredient, "in adder");
      return [...currentIngredients, newIngredient];
    });
    setNewIngredients("");
  };
  const handleChange = (event) => {
    //console.log(event.target.value)
    setNewIngredients(event.target.value);
  };

  return (
    <>
      <div className="fridge-box">
        <h2>What is in your fridge...</h2>
        <div
          className="horizontal-line"
          style={{
            background: "black",
            height: "3px",
          }}
        />{" "}
        <form onSubmit={handleSubmit} className="ingredient-form">
          <label htmlFor="ingredients-input">Ingredient</label>
          <input
            onChange={handleChange}
            id="ingredients-input"
            type="text"
            value={newIngredient}
            className="input-field"
          ></input>
          <button type="submit" className="add-ingredient-button">
            {" "}
            Add Ingredient{" "}
          </button>
        </form>
        <div className="add-ingredients-arrow">
          <BsArrowUpRightCircle />
        </div>
        <h4>
          The only ingredients we assume you have are salt, pepper and water -{" "}
          <br></br>
          plus the ones you have entered above*
        </h4>
      </div>
      <div className="ingredient-tally">
        <IngredientTally ingredientTally={ingredientTally} />
      </div>
    </>
  );
};

export default IngredientAdder;
