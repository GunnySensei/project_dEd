import React from "react";

import { useQuery } from "@apollo/client";
import { QUERY_ME } from "../../utils/queries";

import getTimeLeft from "../../utils/formatTime";

const Userclock = () => {
  const { loading, error, data } = useQuery(QUERY_ME);
  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  const birthday = data.me.birthday  || "";
  console.log(birthday);
  
  const username = data.me.username || "";
  console.log(username);

  const sex = data.me.sex || "";
  console.log(sex);

  let dateString = birthday;
  let timeLeft = getTimeLeft(dateString, sex);

  return (
    <div className="userclock-container">
      <div className="home-container">
        <h1 className="username-h1">{username}'s time remaining:</h1>
        <div className="home-card flex-row space-between">
          <div className="flex-row">
            <h3 className="card-body-purple">{timeLeft.yearsLeft}</h3>
            <h3 className="card-body-white"> year(s),</h3>
          </div>
          <div className="flex-row space-between">
            <h3 className="card-body-purple">{timeLeft.monthsLeft} </h3>
            <h3 className="card-body-white"> month(s),</h3>
          </div>
          <div className="flex-row space-between">
            <h3 className="card-body-purple">{timeLeft.weeksLeft} </h3>
            <h3 className="card-body-white"> week(s),</h3>
          </div>
          <div className="flex-row space-between">
            <h3 className="card-body-purple"> {timeLeft.daysLeft} </h3>
            <h3 className="card-body-white"> day(s)</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Userclock;
