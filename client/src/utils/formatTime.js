//!take birthday from user once logged in
//parse birthday from user token

const getTimeLeft = (dateString) => {
  let parsedDateString = dateString.split("-");
  const ParsedDateCharacter = {
    year: parseInt(parsedDateString[0]),
    month: parseInt(parsedDateString[1]),
    day: parseInt(parsedDateString[2]),
  };
  let birthday = new Date(
    ParsedDateCharacter.year,
    ParsedDateCharacter.month,
    ParsedDateCharacter.day
  );
  let deathDay = new Date(
    ParsedDateCharacter.year + 72,
    ParsedDateCharacter.month,
    ParsedDateCharacter.day
  );
  let totalLife = deathDay - birthday;
  let timeNow = new Date();
  let secondsLeft = totalLife - timeNow;
  let timeLeft = {
    hoursLeft: Math.floor(secondsLeft / 3600000),
    daysLeft: Math.floor(secondsLeft / 86400000),
    weeksLeft: Math.floor(secondsLeft / 604800000),
    monthsLeft: Math.floor(secondsLeft / 2629743000),
    yearsLeft: Math.floor(secondsLeft / 31556926000),
  };
  return timeLeft;

  //take the date of birth
  // const birthDate = new Date();
  //calculate time of death from dob
  //calculate time left from today until death day
};

module.exports = getTimeLeft;
