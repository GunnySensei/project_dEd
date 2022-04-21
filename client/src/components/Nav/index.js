import React from "react";
import { Link } from "react-router-dom";

import Auth from "../../utils/auth";
import logo from "../../assets/images/reaper-logo.png";

const Nav = () => {
  return (
    <header className="flex-row px-1 nav-container">
      <div className="logo-container">
        <Link to="/">
          <img src={logo} alt="cute grim reaper logo" className="logo"></img>
        </Link>
      </div>
      <nav className="nav">
        <ul className="flex-row">
          <li className="mx-2">
            <Link to="/about">About</Link>
          </li>
          <li className="mx-2">
            <Link to="/facts">Death Facts</Link>
          </li>
          <li className="mx-2">
            <Link to="/donate">Donate</Link>
          </li>
          {Auth.loggedIn() ? (
            <>
              <li className="mx-2">
                <Link to="/" onClick={Auth.logout}>
                  Logout
                </Link>
              </li>
            </>
          ) : (
            <>
              <li className="mx-2">
                <Link to="/login">Login</Link>
              </li>
              <li className="mx-2">
                <Link to="/signup">Sign Up</Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
