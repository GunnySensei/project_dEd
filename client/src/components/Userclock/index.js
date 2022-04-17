import React from "react";

import Auth from "../../utils/auth";
import { gql, useQuery } from "@apollo/client";
import { QUERY_ME } from "../../utils/queries";

import getTimeLeft from "../../utils/formatTime";

const Userclock = () => {
  const { loading, error, data } = useQuery(QUERY_ME);

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  const birthday = data.me.birthday || "";
  const username = data.me.username || "";

  console.log(data.me.birthday);

  let dateString = birthday;
  let timeLeft = getTimeLeft(dateString);

  return (
    <div className="userclock-container">
      <div className="user-info-container">
        <h1 className="username-h1">{username}</h1>
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
