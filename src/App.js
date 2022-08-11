
import './App.css';
import Header from './Header'
import IngredientAdder from './IngredientAdder'
import IngredientTally from './IngredientTally'
import RecipeGenerator from './RecipeGenerator'


function App() {
  return (
    <div className="App">
      <main>
      <Header />
      <IngredientAdder />
      <IngredientTally />
      <RecipeGenerator />
      </main>
      
    </div>
  );
}

export default App;
