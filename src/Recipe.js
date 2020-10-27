import React from "react";
import "./App.css";

const Recipe = ({ key, name, calories, ingredients, image }) => {
  return (
    <div id={key} className="card">
      <h1>{name}</h1>
      <h3>{calories}</h3>
      <ul>
        {ingredients.map((ingredient) => (
          <li>{ingredient.text}</li>
        ))}
      </ul>
      <img src={image} alt="" />
    </div>
  );
};

export default Recipe;
