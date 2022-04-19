//!take birthday from user once logged in
//parse birthday from user token

const getTimeLeft = (dateString) => {
  let yearsLeft = 0;
  let monthsLeft = 0;
  let weeksLeft = 0;
  let daysLeft = 0;

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
  let numericBirthday = birthday.getTime();
  let deathDay = new Date(
    ParsedDateCharacter.year + 72,
    ParsedDateCharacter.month,
    ParsedDateCharacter.day
  );
  let numericDeathday = deathDay.getTime();

  let totalLife = numericDeathday - numericBirthday;
  let timeNow = new Date();
  let numericTimeNow = timeNow.getTime();
  let secondsLeft = numericDeathday - numericTimeNow;
  console.log("this person has " + secondsLeft + " seconds left");

  const calcFinalTime = (secondsLeft) => {
    //calculate years left with remainder
    let remYearsLeft = secondsLeft % 31556926000;
    yearsLeft = Math.floor(secondsLeft / 31556926000);
    let remMonthsLeft = remYearsLeft % 2629743000;
    monthsLeft = Math.floor(remYearsLeft / 2629743000);
    let remWeeksLeft = remMonthsLeft % 604800000;
    weeksLeft = Math.floor(remMonthsLeft / 604800000);
    daysLeft = Math.floor(remWeeksLeft / 86400000);

    return yearsLeft, monthsLeft, weeksLeft, daysLeft;
  };

  calcFinalTime(secondsLeft);

  let timeLeft = {
    yearsLeft: yearsLeft,
    monthsLeft: monthsLeft,
    weeksLeft: weeksLeft,
    daysLeft: daysLeft,
  };

  return timeLeft;
};

module.exports = getTimeLeft;
