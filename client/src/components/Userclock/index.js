import React from "react";
const username = "placeholder";

const timeLeft = require("../../utils/formatTime");

const Userclock = () => {
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
