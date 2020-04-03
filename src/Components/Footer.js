import React from "react";
import "./Footer.css";
import Badge from "../Images/edamam.png";
import ReactBadge from "../Images/react.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-author">
        {" "}
        <a href="https://github.com/maanderz">Created by: Mandy A</a>
      </div>
      <div className="edamam-badge">
        <a href="https://developer.edamam.com/">
          <img src={Badge} alt="badge" />
        </a>
      </div>
      <div className="react-badge">
        <a href="https://reactjs.org/">
          <span> ReactJS </span> <img src={ReactBadge} alt="badge" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
