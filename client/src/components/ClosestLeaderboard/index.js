import React from "react";
import getTimeLeft from "../../utils/formatTime";

const ClosestLeaderboard = ({ users }) => {
  if (!users.length) {
    return <h3>No users yet</h3>;
  }

  // let sortedArray = [...users];

  // for (let i = 0; i <= users.length; i++) {
  //   users = sortedArray.sort(sortedArray.birthday);
  // }

  // let sortedUsers = [...users];
  // console.log("sorted users = " + sortedUsers);
  // for (let i = 0; i <= users.length; i++) {
  //   users = sortedUsers.reverse();
  //   console.log(users + "reversed");
  // }

  return (
    <>
      <div>
        <h2 className="leaderboardHeader bold">Closest Leaderboard</h2>
        <div className="home-card-secondary">
          {users &&
            users.map((user) => (
              <div key={user._id} className="card-body-white">
                <h3 className="user-name">{user.username}</h3>
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

export default ClosestLeaderboard;
