import React from "react";

function App() {
  return (
    <header className="flex-row px-1">
      <h2>
        <a data-testid="link" href="/">
          <span role="img" aria-label="Reaper Logo">
            <img href="../../assets/images/reaper-logo.png"></img>
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
}
