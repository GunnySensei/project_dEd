import React from "react";
import getTimeLeft from "../../utils/formatTime";

const FurthestLeaderboard = ({ users }) => {
  if (!users.length) {
    return <h3>No users yet</h3>;
  }

  let sortedArray = [...users];

  for (let i = 0; i <= users.length; i++) {
    users = sortedArray.sort(sortedArray.birthday);
  }
  return (
    <>
      <div>
        <h2 className="leaderboardHeader bold">Furthest Leaderboard</h2>
        <div className="home-card-secondary">
          {users &&
            users.map((user) => (
              <div key={user._id} className="card-body-white">
                <h3 className="username-purple">{user.username}</h3>
                <p className="user-birthday">
                  {getTimeLeft(user.birthday, user.sex).yearsLeft} years ,{" "}
                  {getTimeLeft(user.birthday, user.sex).monthsLeft} months ,{" "}
                  {getTimeLeft(user.birthday, user.sex).weeksLeft} weeks , and{" "}
                  {getTimeLeft(user.birthday, user.sex).daysLeft} days left.
                </p>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default FurthestLeaderboard;
