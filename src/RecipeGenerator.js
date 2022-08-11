import { useState } from 'react';

const recipe1 = ["recipe 1","now this", "now that"]
const recipe2 = ["recipe 2", "break some eggs", "clean up"]
const recipe3 = ["recipe 3", "cut some stuff", "dinner made"]


let mockRecipe = [recipe1, recipe2, recipe3]

 const RecipeGenerator = () => {

    return (<> <button>Generate Your Recipe</button> 
    <p>Here's Your Recipe:
    </p>
    <ul> {mockRecipe[Math.floor(Math.random()*mockRecipe.length)].map((line) => {
        return (<li>{line}</li>) 
    })}
    </ul>
    </>)
}

export default RecipeGenerator