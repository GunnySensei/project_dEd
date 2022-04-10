import React from "react";

import Userclock from "../src/components/Userclock";
import Leaderboard from "../src/components/Leaderboard";
import Footer from "../src/components/Footer";

const Home = () => {
  return (
    <main>
      <div>
        <Userclock></Userclock>
        <Leaderboard></Leaderboard>
        <Leaderboard></Leaderboard>
      </div>
    </main>
  );
};
