import { BsArrowUpRightCircle } from "react-icons/bs";

const IngredientAdder = () => {
  // let newIngredients = [{ingredient: "tomato", quantity: 3}, {ingredient: "pickles", quantity: 5} ]
  // return  newIngredients

  return (
    <>
      <div class="fridge-box">
        <h2>What is in your fridge...</h2>
        <div
          class="horizontal-line"
          style={{
            background: "black",
            height: "3px",
          }}
        />
        <button class="add-ingredient-button"> Add Ingredient </button>
        <div class="add-ingredients-arrow">
          <BsArrowUpRightCircle />
        </div>
        <h4>
          The only ingredients we assume you have are salt, pepper and water -{" "}
          <br></br>
          plus the ones you have entered above*
        </h4>
      </div>
    </>
  );
};

export default IngredientAdder;
