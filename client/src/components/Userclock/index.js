import React from "react";

import Auth from "../../utils/auth";
import { useQuery } from "@apollo/client";
import { QUERY_ME } from "../../utils/queries";

import getTimeLeft from "../../utils/formatTime";

const Userclock = () => {
  const { loading, data } = useQuery(QUERY_ME);
  const { data: userData } = useQuery(QUERY_ME);
  const birthday = data?.birthday || "";
  const username = data?.username || "";

  const loggedIn = Auth.loggedIn();

  console.log(userData);

  let dateString = birthday;
  let timeLeft = getTimeLeft(dateString);

  return (
    <div className="userclock-container">
      {/* {loggedIn( */}
      <div className="user-info-container">
        <h1 className="username-h1">{username}</h1>
        <h2 className="user-time-counter">
          You have {timeLeft.hoursLeft} hours, {timeLeft.daysLeft} days,{" "}
          {timeLeft.weeksLeft} weeks, {timeLeft.monthsLeft} months, and{" "}
          {timeLeft.yearsLeft} years left.
        </h2>
      </div>
      // )}
    </div>
  );
};

export default Userclock;
