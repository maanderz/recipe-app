import React, { useEffect, useState } from "react";
import "./Recipes.css";

function Recipe(props) {
  let query = props.query.replace(/\s/g, "+");
  const [card, setCard] = useState([]);

  useEffect(() => {
    if (query == null || query === "") {
      return;
    }

    fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${
        process.env.app_id
      }&app_key=${process.env.api_key}&from=0&to=9`
    )
      .then(results => results.json())
      .then(data => {
        setCard(data.hits);
      });
  }, [query]); // useEffect will trigger whenever query is different.

  return (
    <div className="recipes-section">
      {card.map((recipe, index) => {
        return (
          <div key={index} className="card" style={{ width: 250 }}>
            <img
              className="card-img-top"
              src={recipe.recipe.image}
              alt="recipe"
            />
            <div className="card-body">
              <a href={recipe.recipe.shareAs}>
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
