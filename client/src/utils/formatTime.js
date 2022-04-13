let timeLeft = {};

const getTimeLeft = () => {
  let birthday = new Date(87, 12, 1);
  let deathDay = new Date(2072, 12, 1);
  let totalLife = deathDay - birthday;
  let timeNow = new Date();
  let secondsLeft = totalLife - timeNow;
  console.log(totalLife);
  timeLeft = {
    hoursLeft: Math.floor(secondsLeft / 3600000),
    daysLeft: Math.floor(secondsLeft / 86400000),
    weeksLeft: Math.floor(secondsLeft / 604800000),
    monthsLeft: Math.floor(secondsLeft / 2629743000),
    yearsLeft: Math.floor(secondsLeft / 31556926000),
  };

  //take the date of birth
  // const birthDate = new Date();
  //calculate time of death from dob
  //calculate time left from today until death day
};
getTimeLeft();

module.exports = timeLeft;
