import React from "react";
const username = "placeholder";
const time = Date.now();

const Userclock = () => {
  return (
    <div className="userclock-container">
      <div className="user-info-container">
        <h1 className="username-h1">{username}</h1>
        <h2 className="user-time-counter">You have {time} left.</h2>
      </div>
    </div>
  );
};

export default Userclock;
