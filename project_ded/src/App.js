import React from "react";

import Nav from "../src/components/Nav";
import Home from "../src/pages/Home";
import About from "../src/pages/About";
import Facts from "../src/pages/Facts";
import Login from "../src/pages/Login";
import Signup from "../src/pages/Signup";

function App() {
  return (
    <div>
      <Nav></Nav>
      <main>
        <Home></Home>
        <About></About>
        <Facts></Facts>
        <Login></Login>
        <Signup></Signup>
      </main>
    </div>
  );
}

export default App;
