import React from 'react';
import './Navbar.css'

const Navbar = () => {
    return (
        
        
        <nav className="navbar">
  
            <div className="container">
                    <a className="navbar-brand" href="#myPage">Logo</a>
                <div className="collapse" id="myNavbar">
                    <ul className="nav-links">
                        <li className='nav-items'><a href="#about">ABOUT</a></li>
                        <li className='nav-items'><a href="#services">SERVICES</a></li>
                        <li className='nav-items'><a href="#contact">CONTACT</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

export default Navbar;