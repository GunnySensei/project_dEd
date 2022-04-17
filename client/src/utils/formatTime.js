//!take birthday from user once logged in
//parse birthday from user token

const getTimeLeft = (dateString) => {
  let parsedDateString = dateString.split("-");
  const ParsedDateCharacter = {
    year: parseInt(parsedDateString[0]),
    month: parseInt(parsedDateString[1]),
    day: parseInt(parsedDateString[2]),
  };
  console.log(
    "incoming date = " +
      ParsedDateCharacter.year +
      ParsedDateCharacter.month +
      ParsedDateCharacter.day
  );
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
  console.log(deathDay);
  console.log(birthday);
  let totalLife = deathDay - birthday;
  let timeNow = new Date();
  let secondsLeft = totalLife - timeNow;
  let timeLeft = {
    yearsLeft: Math.floor(secondsLeft / 31556926000),
    monthsLeft: Math.floor(secondsLeft / 2629743000),
    weeksLeft: Math.floor(secondsLeft / 604800000),
    daysLeft: Math.floor((secondsLeft - secondsLeft / 604800000) / 86400000),
    hoursLeft: Math.floor(secondsLeft / 3600000),
  };
  return timeLeft;

  //take the date of birth
  // const birthDate = new Date();
  //calculate time of death from dob
  //calculate time left from today until death day
};

module.exports = getTimeLeft;
