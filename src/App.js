import "./App.css";
import Header from "./Header";
import IngredientAdder from "./IngredientAdder";
import RecipeGenerator from "./RecipeGenerator";

function App() {
  return (
    <div className="App">
      <main>
        <Header />
        <IngredientAdder />
       
        <RecipeGenerator />
      </main>
    </div>
  );
}

export default App;
