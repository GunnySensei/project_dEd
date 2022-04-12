import React from "react";
import logo from "../../assets/images/reaper-logo.png";

const Nav = () => {
  return (
    <header className="flex-row px-1">
      <h2>
        <a data-testid="link" href="/">
          <span role="img" aria-label="Reaper Logo">
            <img src={logo} alt="cute grim reaper logo"></img>
          </span>
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <a href="#about">About me</a>
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
