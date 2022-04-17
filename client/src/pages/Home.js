import React from "react";

import Userclock from "../components/Userclock";
import ClosestLeaderboard from "../components/ClosestLeaderboard";
import FarthestLeaderboard from "../components/FarthestLeaderboard";
import { useQuery } from "@apollo/client";
import { QUERY_USERS } from "../utils/queries";

const Home = () => {
  const { loading, data } = useQuery(QUERY_USERS);
  const users = data?.users || [];

  return (
    <>
      <main>
        <div>
          <Userclock></Userclock>
          <ClosestLeaderboard users={users} />
          <FarthestLeaderboard users={users} />
        </div>
      </main>
    </>
  );
};

export default Home;
