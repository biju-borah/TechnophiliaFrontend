import React, { useEffect, useState } from "react";
import "./Hero.css";
import { Link } from "react-router-dom";

const Hero = () => {

  const [auth, setauth] = useState(false);
  useEffect(() => {
    let name = localStorage.getItem('name')
    if (name) {
      setauth(true)
    }
  }, []);

  return (
    <div className="banner">
      <h1>
        {" "}
        <span>NITS</span> hostel management system
      </h1>
      <p>We specialize in blablabla</p>
      <ul className="navbar-link">
        {auth ? <li className="nav-item">
          <span className="nav-link">
            <Link to="dashboard/main" className="button-15" role="button">Go to Dashboard</Link>
          </span>
        </li>
          :
          <>
            <li className="nav-item">
              <span className="nav-link">
                <Link to="register" className="button-15" role="button">Sign up</Link>
              </span>
            </li>
            <li className="nav-item">
              <Link to="login" className="button-24" role="button">Log in</Link>
            </li>
          </>
        }
      </ul>
    </div>
  );
};

export default Hero;
