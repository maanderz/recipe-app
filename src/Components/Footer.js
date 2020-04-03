import React from "react";
import "./Footer.css";
import Badge from "../Images/edamam.png";

function Footer() {
  return (
    <footer className="test1">
      <div className="badge">
        <a href="https://developer.edamam.com/">
          <img src={Badge} alt="badge" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
