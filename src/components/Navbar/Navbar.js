import React from "react";
import "./Navbar.css";
import Toggle from "../Toggle/Toggle";
import { Link } from "react-scroll";

function Navbar() {
  return (
    <div className="n-wrapper">
      <div className="n-left">
        <div className="n-name">Kelvin</div>
        <Toggle />
      </div>
      <div className="n-right">
        <div className="n-list">
          <ul>
            <Link
              spy={true}
              smooth={true}
              to="Navbar"
              activeClass="activeClass"
            >
              <li>Home</li>
            </Link>
            <Link spy={true} smooth={true} to="Services">
              <li>Services</li>
            </Link>
            <Link spy={true} smooth={true} to="Experience">
              <li>Experience</li>
            </Link>
            <Link spy={true} duration={1500} smooth={true} to="Portfolio">
              <li>Portfolio</li>
            </Link>
            <Link spy={true} smooth={true} duration={2000} to="Testimonial">
              <li>Testimonial</li>
            </Link>
          </ul>
        </div>

        <Link spy={true} smooth={true} to="Contact" duration={2500} >
          <button className="button n-button">Contact</button>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
