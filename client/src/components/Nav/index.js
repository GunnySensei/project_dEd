import React from "react";
import logo from "../../assets/images/reaper-logo.png";

const Nav = () => {
  return (
<<<<<<< HEAD
    <header className="flex-row px-1">
      <h2>
        <a data-testid="link" href="/">
          <span role="img" aria-label="Reaper Logo">
            <img src={logo} alt="cute grim reaper logo"></img>
          </span>
        </a>
      </h2>
      <nav>
=======
    <header className="flex-row">
      <img src={logo} />
      <nav className="navText">
>>>>>>> 8357272bf563a204ae90ff1a60b442c6ae693ee7
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
