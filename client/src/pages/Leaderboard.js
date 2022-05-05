import React from "react";

import Userclock from "../components/Userclock";
import ClosestLeaderboard from "../components/ClosestLeaderboard";
import FurthestLeaderboard from "../components/FarthestLeaderboard";
import { useQuery } from "@apollo/client";
import { QUERY_USERS } from "../utils/queries";

const Leaderboard = () => {
  const { data } = useQuery(QUERY_USERS);
  const users = data?.users || [];

  return (
    <>
      <main>
        <div>
          <Userclock></Userclock>
          <div className="flex-row align-items-center space-around">
            <ClosestLeaderboard users={users} />
            <FurthestLeaderboard users={users} />
          </div>
        </div>
      </main>
    </>
  );
};

export default Leaderboard;
