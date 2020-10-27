import React, { useEffect, useState } from "react";
import Recipe from "./Recipe.js";
import "./App.css";

const App = () => {
  const APP_ID = "14cb8cad";
  const APP_KEY = "a02051d6c936e9a3a8a590722f5b60d4";
  // const exampleReq = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

  // eslint-disable-next-line
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  // eslint-disable-next-line
  const [query, setQuery] = useState("");

  useEffect(() => {
    getRecipes();
    // eslint-disable-next-line
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };
  return (
    <div className="App">
      <form action="" className="search-form" onSubmit={getSearch}>
        <input className="search-bar" type="text" onChange={updateSearch} />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      <div className="recipes">  
        {recipes.map((recipe) => (
          <Recipe
            key={recipe.recipe.label}
            name={recipe.recipe.label}
            calories={recipe.recipe.calories}
            ingredients={recipe.recipe.ingredients}
            image={recipe.recipe.image}
          />
        ))}
      </div>
    </div>
  );
};
export default App;