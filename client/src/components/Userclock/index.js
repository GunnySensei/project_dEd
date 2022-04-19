import React from "react";

import { useQuery } from "@apollo/client";
import { QUERY_ME } from "../../utils/queries";

import getTimeLeft from "../../utils/formatTime";

const Userclock = () => {
  const { loading, error, data } = useQuery(QUERY_ME);

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  const birthday = data.me.birthday || "";
  const username = data.me.username || "";

  let dateString = birthday;
  let timeLeft = getTimeLeft(dateString);

  return (
    <div className="userclock-container">
      <div className="user-info-container">
        <h1 className="username-h1">{username}'s time remaining:</h1>
        <div className="user-time-counter-container">
          <h3 className="year-count">{timeLeft.yearsLeft} year(s),</h3>
          <h3 className="month-count">{timeLeft.monthsLeft} month(s),</h3>
          <h3 className="week-count">{timeLeft.weeksLeft} week(s),</h3>
          <h3 className="day-count"> {timeLeft.daysLeft} day(s)</h3>
        </div>
      </div>
    </div>
  );
};

export default Userclock;
