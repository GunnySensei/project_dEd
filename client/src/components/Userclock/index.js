import React from "react";

import { useQuery } from "@apollo/client";
import { QUERY_ME } from "../../utils/queries";

import getTimeLeft from "../../utils/formatTime";

const Userclock = () => {
  const { loading, error, data } = useQuery(QUERY_ME);

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  let dateString = data.me.birthday;
  let timeLeft = getTimeLeft(dateString);

  return (
    <div className="userclock-container">
      <div className="user-info-container">
        <h1 className="username-h1">{data.me.username}</h1>
        <h2 className="user-time-counter">
          You have {timeLeft.hoursLeft} hours, {timeLeft.daysLeft} days,{" "}
          {timeLeft.weeksLeft} weeks, {timeLeft.monthsLeft} months, and{" "}
          {timeLeft.yearsLeft} years left.
        </h2>
      </div>
    </div>
  );
};

export default Userclock;
