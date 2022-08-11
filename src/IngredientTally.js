import { useState } from 'react';
function IngredientTally() {

const ingredientToAdd = {ingredient: "bread", quantity: 3}

const [ingredientList, setIngredient] = useState([])
//console.log(input)
  const  handleClick = () => {
      setIngredient((currentIngredients) => {
       let ingredientArray = [...currentIngredients]
       //console.log(ingredientArray)
       ingredientArray.push(ingredientToAdd)
        return ingredientArray
    })
    
}
    return (
        <main>
            <h3> Ingredient Tally:</h3>
            
            {ingredientList.map((item) => {
                return (<> <p className="ingredient">{item.ingredient}</p> <p>{item.quantity}</p> </>) 
            })} 
         
            <button className="button"onClick={handleClick}>Click Here!</button> 
        </main>)
}

export default IngredientTally