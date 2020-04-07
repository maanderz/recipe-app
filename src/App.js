import React, { useState } from "react";
import "./styles.css";
import Nav from "./Components/Nav";
import Recipes from "./Components/Recipes";
import Footer from "./Components/Footer";

export default function App() {
  const [query, setQuery] = useState("");

  const getQuery = value => {
    setQuery(value);
  };

  return (
    <div className="App">
      <Nav getQuery={getQuery} />
      <Recipes className="App-child" query={query} />
      <Footer />
    </div>
  );
}
