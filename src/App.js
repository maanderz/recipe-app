import React, { useEffect, useState } from "react";
import "./styles.css";
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";

export default function App() {
  // const [data, setTotalReactPackages] = useState("");

  // useEffect(() => {
  //   // GET request using fetch inside useEffect React hook
  //   fetch("https://api.npms.io/v2/search?q=react")
  //     .then(response => response.json())
  //     .then(data => setTotalReactPackages(data.total));
  //   // empty dependency array means this effect will only run once (like componentDidMount in classes)
  // }, []);

  // console.log("data", data);

  return (
    <div className="App">
      <Nav />

      <Footer />
    </div>
  );
}
