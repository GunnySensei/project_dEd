import React from "react";
import getTimeLeft from "../../utils/formatTime";

const Leaderboard = ({ users }) => {
  if (!users.length) {
    return <h3>No users yet</h3>;
  }

  return (
    <>
      <h1 className="leaderboardHeader">Leaderboard</h1>
      <div>
        {users &&
          users.map((user) => (
            <div key={user._id} className="leaderboard-users">
              <h3 className="user-name">{user.username}</h3>
              <p className="user-birthday">
                {user.username} was born {user.birthday} and{" "}
                {getTimeLeft(user.birthday).yearsLeft} years ,{" "}
                {getTimeLeft(user.birthday).monthsLeft} months ,{" "}
                {getTimeLeft(user.birthday).weeksLeft} weeks ,{" "}
                {getTimeLeft(user.birthday).daysLeft} days , and{" "}
                {getTimeLeft(user.birthday).hoursLeft} hours left.
              </p>
            </div>
          ))}
      </div>
    </>
  );
};

export default Leaderboard;
