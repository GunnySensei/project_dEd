// function today() {
//   const date = new Date();
//   const today = date.toLocaleDateString();
//   console.log(today);
//   return today;
// };

// function time() {
//   const date = new Date();
//   const time = date.toLocaleTimeString();
//   console.log(time);
//   return time;
// }

const getTimeLeft = (dateString, sex) => {
  let yearsLeft = 0;
  let monthsLeft = 0;
  let weeksLeft = 0;
  let daysLeft = 0;
  let lifeSpan = 0;

  //variables for randomizer
  let posOrNegative = Math.round(Math.random()) * 2 - 1;
  let maxVariation = 9;

  if (sex === "male" || sex === "Male") {
    lifeSpan = 72;
  } else if (sex === "female" || sex === "Female") {
    lifeSpan = 78;
  } else lifeSpan = 1000;

  let parsedDateString = dateString.split("-");
  console.log(parsedDateString)

  const birthday = {
    year: parseInt(parsedDateString[0]),
    month: parseInt(parsedDateString[1]),
    day: parseInt(parsedDateString[2]),
  };

  // let numericBirthday = birthday.getTime();

  let deathDay = new Date(
    birthday.year +
      (Math.floor(Math.random(maxVariation * posOrNegative)) + lifeSpan),
    birthday.month,
    birthday.day
  );
  let numericDeathday = deathDay.getTime();

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

    return (yearsLeft, monthsLeft, weeksLeft, daysLeft);
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

// const convertBirthday = (dateString) => {

//   let parsedDateString = dateString.split("-");

//   const birthday = {
//     year: parseInt(parsedDateString[0]),
//     month: parseInt(parsedDateString[1]),
//     day: parseInt(parsedDateString[2]),
//   };

//   var myYear = birthday.year;
//   var myMonth = birthday.month;
//   var myDay = birthday.day;

//   const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
//   ];

//   var birthdayConverted = [month[myMonth - 1] + ' ' + myDay + ', ' + myYear + '. ' + '(' + myMonth + '/' + myDay + '/' + myYear + ')'];

//   console.log(birthdayConverted);
  
//   return birthdayConverted;
// }

// const nextBirthday = (dateString) => {
//   let parsedDateString = dateString.split("-");

//   const birthday = {
//     year: parseInt(parsedDateString[0]),
//     month: parseInt(parsedDateString[1]),
//     day: parseInt(parsedDateString[2]),
//   };

//   const today = new Date();

//   var myYear = birthday.year;
//   var myMonth = birthday.month;
//   var myDay = birthday.day;
  
//   myMonth--


//   var nextBirthday = (new Date(today.getFullYear(), myMonth, myDay)) < today ? (new Date(today.getFullYear() + 1, myMonth, myDay)) : (new Date(today.getFullYear(), myMonth, myDay));

//   var milliseconds, seconds, minutes, hours, days;

//   var diff = nextBirthday - today;

//   milliseconds = diff % 1000;
//   diff = (diff - (milliseconds)) / 1000;

//   seconds = diff % 60
//   diff = (diff - seconds) / 60;

//   minutes = diff % 60
//   diff = (diff - minutes) / 60;

//   hours = diff % 24

//   days = (diff - hours) / 24;
// }



// const getTimeExisted = (dateString) => {
//   console.log(nextBirthday);

//   let parsedDateString = dateString.split("-");

//   const birthday = {
//     year: parseInt(parsedDateString[0]),
//     month: parseInt(parsedDateString[1]),
//     day: parseInt(parsedDateString[2]),
//   };
 
//   var day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

//   const today = new Date();

//   var milliseconds, seconds, minutes, hours, days;

//   // var years = today.getFullYear() - birthday.getFullYear();


//   var diffAlive = today - birthday;
  
//   milliseconds = diffAlive % 1000; 
//   diffAlive = (diffAlive - (milliseconds)) / 1000;

//   seconds = diffAlive % 60
//   diffAlive = (diffAlive - seconds) / 60;

//   minutes = diffAlive % 60
//   diffAlive = (diffAlive - minutes) / 60;

//   hours = diffAlive % 24

//   days = (diffAlive - hours) / 24;

//   var aliveFor = document.getElementById("aliveFor").innerHTML = "I have been alive for..." + "<br>" + days + " days, " + hours + " hours, " + minutes + " minutes, " + seconds + " seconds";

//   // var aliveFor = document.getElementById("aliveFor").innerHTML = "I have been alive for..." + "<br>" + days + " days, " + hours + " hours, " + minutes + " minutes, " + seconds + " seconds";
  
// }

module.exports = getTimeLeft;
