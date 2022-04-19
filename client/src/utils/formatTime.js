const getTimeLeft = (dateString, sex) => {
  let yearsLeft = 0;
  let monthsLeft = 0;
  let weeksLeft = 0;
  let daysLeft = 0;
  let lifeSpan = 0;
  let posOrNegative = Math.round(Math.random()) * 2 - 1;
  let maxVariation = 9;

  if (sex === "male" || sex === "Male") {
    lifeSpan = 72;
  } else if (sex === "female" || sex === "Female") {
    lifeSpan = 78;
  } else lifeSpan = 1000;

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
    ParsedDateCharacter.year +
      (Math.floor(Math.random(maxVariation * posOrNegative)) + lifeSpan),
    ParsedDateCharacter.month,
    ParsedDateCharacter.day
  );
  let numericDeathday = deathDay.getTime();

  let totalLife = numericDeathday - numericBirthday;
  let timeNow = new Date();
  let numericTimeNow = timeNow.getTime();
  let secondsLeft = numericDeathday - numericTimeNow;

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
