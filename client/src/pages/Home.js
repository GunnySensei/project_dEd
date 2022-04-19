import React from "react";

import Userclock from "../components/Userclock";
import Leaderboard from "../components/Leaderboard";
import { useQuery } from "@apollo/client";
import { QUERY_USERS } from "../utils/queries";

const Home = () => {
  const { data } = useQuery(QUERY_USERS);
  const users = data?.users || [];

  return (
    <>
      <main>
        <div>
          <Userclock></Userclock>
          <Leaderboard users={users} />
        </div>
      </main>
    </>
  );
};

export default Home;
