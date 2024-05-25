import React, { useState } from "react";
import "./navbar.css";
import "./navbar.scss";
import { Link } from "react-router-dom";
import { PiFireTruckDuotone } from "react-icons/pi";

const Navbar = () => {
  const [active, setActive] = useState('navBar');

  const showNav = () => {
    setActive("navBar activeNavbar")
  };
  const removeNavbar = () => {
    setActive("navBar");
  };
                                                                    

  return (
    <section className="navBarSection">
      <header className="header flex">
        <div className="logoDiv">
          <a href="#" className="logo flex">
            <h1>
              <PiFireTruckDuotone className="icon" /> TrailBlazerz
            </h1>
          </a>
        </div>

        <div className={active}>
          <ul className="navLists flex">
            <li className="navItem">
              <a href="#" className="navLink">
                Home
              </a>
            </li>

            <li className="navItem">
              <Link to ="/Main" className="navLink" onClick={removeNavbar}>
                Packages
              </Link>
            </li>

            <li className="navItem">
              <a href="#" className="navLink">
                Shop
              </a>
            </li>

            <li className="navItem">
              <a href="#" className="navLink">
                About
              </a>
            </li>

            <li className="navItem">
              <a href="#" className="navLink">
                Pages
              </a>
            </li>

            <li className="navItem">
              <a href="#" className="navLink">
                News
              </a>
            </li>

            <li className="navItem">
              <a href="#" className="navLink">
                Contact
              </a>
            </li>

            <button className="btn">
              <a href="#"> BOOK NOW </a>
            </button>
          </ul>
        </div>
        
      </header>
    </section>
  );
};
export default Navbar