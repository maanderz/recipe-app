import React, { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [data, setTotalReactPackages] = useState("");

  useEffect(() => {
    // GET request using fetch inside useEffect React hook
    fetch("https://api.npms.io/v2/search?q=react")
      .then(response => response.json())
      .then(data => setTotalReactPackages(data.total));
    // empty dependency array means this effect will only run once (like componentDidMount in classes)
  }, []);

  console.log("data", data);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
