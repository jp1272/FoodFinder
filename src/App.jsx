import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Recipes from "./pages/Recipes.jsx";
import "./App.css";
import RecipePage from "./pages/RecipePage.jsx";
import AddRecipe from "./pages/AddRecipe.jsx";
import NotFound from "./pages/NotFound.jsx";
import SideBar from "./components/SideBar.jsx";
import SearchBar from "./components/SearchBar.jsx";

function App() {
  const [meals, setMeals] = useState([]);
  const [featured, setFeatured] = useState([]);

  async function getRecipes(API_URL) {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      console.log(data.meals);

      setMeals(data.meals);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    const fetchRandomMeals = async () => {
      const promises = Array(5)
        .fill()
        .map(() =>
          fetch("https://www.themealdb.com/api/json/v1/1/random.php").then(
            (res) => res.json()
          )
        );

      const results = await Promise.all(promises);
      const meals = results.map((result) => result.meals[0]);
      setFeatured(meals);
    };

    fetchRandomMeals();
  }, []);

  return (
    <div className="app-layout">
      <SideBar />
      <div className="main-section">
        <SearchBar getRecipes={getRecipes} />
        <div className="content-area">
          <Routes>
            <Route path="/" element={<Home featured={featured} />} />
            <Route path="/recipes" element={<Recipes recipes={meals} />} />
            <Route path="/recipes/:id" element={<RecipePage />} />
            <Route path="/recipes/new" element={<AddRecipe />} />
            <Route path="*" element={<NotFound></NotFound>}></Route>
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
