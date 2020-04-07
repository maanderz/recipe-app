import React, { useState } from "react";
import "./Nav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function Nav(props) {
  const [value, setValue] = useState("");

  return (
    <div className="search-input-group">
      <div className="nav-items">
        <h1 className="page-title">Recipe Search using React</h1>
        <div>
          <input
            type="text"
            className="text-field"
            placeholder="Recipe Name ..."
            onChange={e => setValue(e.target.value)}
          />
          <button
            type="button"
            className="button"
            onClick={() => props.getQuery(value)}
          >
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Nav;
