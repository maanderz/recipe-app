import React, { useEffect, useState } from "react";
import "./Recipes.css";

function Recipe(props) {
  let query = props.query.replace(/\s/g, "+");
  const [card, setCard] = useState([]);

  console.log(query);

  useEffect(query => {
    // GET request using fetch inside useEffect React hook
    fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${
        process.env.app_id
      }&app_key=${process.env.api_key}`
    )
      .then(response => response.json())
      .then(data => setCard(data));
    // empty dependency array means this effect will only run once (like componentDidMount in classes)
  }, []);

  console.log(card);

  return (
    <div className="recipes-section">
      {card.hits.map((recipe, index) => {
        return (
          <div key={index} className="card" style={{ width: 250 }}>
            <img
              className="card-img-top"
              src={recipe.recipe.image}
              alt="recipe"
            />
            <div className="card-body">
              <a href={recipe.recipe.uri}>
                <h5 className="card-title">{recipe.recipe.label}</h5>
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Recipe;
