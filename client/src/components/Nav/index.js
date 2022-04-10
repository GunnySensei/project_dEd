import React from "react";
import logo from "../../assets/images/reaper-logo.png";

const Nav = () => {
  return (
    <header className="flex-row">
      <img src={logo} />
      <nav className="navText">
        <ul className="flex-row">
          <li className="mx-2">
            <a href="#about">About</a>
          </li>
          <li className="mx-2">
            <a href="#facts">Death Facts</a>
          </li>
          <li className="mx-2">
            <a href="#facts">Donate</a>
          </li>
          <li className="mx-2">
            <a href="#facts">Login</a>
          </li>
          <li className="mx-2">
            <a href="#facts">Sign Up</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
