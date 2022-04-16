import { useQuery } from "@apollo/client";
import React from "react";
import getTimeLeft from "../../utils/formatTime";
import { QUERY_ME } from "../../utils/queries";

const Userclock = () => {
  const { data: userData } = useQuery(QUERY_ME);
  console.log(userData);

  let dateString = userData.birthday;
  let timeLeft = getTimeLeft(dateString);

  return (
    <div className="userclock-container">
      <div className="user-info-container">
        <h1 className="username-h1">{userData.username}</h1>
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
