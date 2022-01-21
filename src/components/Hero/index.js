import React from "react";
import "./Hero.css";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="banner">
      <h1>
        {" "}
        <span>NITS</span> hostel management system
      </h1>
      <p>We specialize in blablabla</p>
      <ul className="navbar-link">
        <li className="nav-item">
          <a className="nav-link" to="/register">
          <Link to="register" class="button-15" role="button">Sign up</Link>
          </a>
        </li>
        <li className="nav-item">
          <a  to="/login">
          <Link to="login" class="button-24" role="button">Log in</Link>
         
          </a>
        </li>
      </ul>

    </div>
  );
};

export default Hero;
