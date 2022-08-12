import { useState } from "react";


const recipe1 = ["recipe 1", "now this", "now that"];
const recipe2 = ["recipe 2", "break some eggs", "clean up"];
const recipe3 = ["recipe 3", "cut some stuff", "dinner made"];

let mockRecipe = [recipe1, recipe2, recipe3];



const RecipeGenerator = (props) => {
  console.log("hello from recipe", props.ingredientList)

  const [oneClick, setOneClick] = useState(false)
  console.log(oneClick)
    if(oneClick === false) {
      return <>
      <div className="recipe-section">
        <button onClick={() => {
          setOneClick(true)
        }}type="submit" >Generate Your Recipe</button>
      </div>
    </>
    } else
  return (
    <>
      <div className="recipe-section">
        <button onClick={() => {
          setOneClick(true)
        }}type="submit" >Generate Your Recipe</button>
       
        <span>
          <ul>
            {" "}
            {mockRecipe[Math.floor(Math.random() * mockRecipe.length)].map(
              (line) => {
                return <li key={line}>{line}</li>;
              }
            )}
          </ul>
        </span>
      </div>
    </>
  );
};




export default RecipeGenerator; 
