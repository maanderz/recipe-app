import React from "react";
import "./Nav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function Nav(props) {
  return (
    <div className="search-input-group">
      <div className="nav-items">
        <h1 className="page-title">Recipe Search using React</h1>
        <input
          type="text"
          className="text-field"
          placeholder="Recipe Name ..."
        />
        <button type="button" className="button">
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>
    </div>
  );
}

export default Nav;
