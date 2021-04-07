/*The Irish lottery draw takes place twice weekly on a Wednesday and a Saturday at 8pm. Write a function that calculates and returns the next
valid draw date based on the current date and time and also on an optional supplied date time parameter*/

/*The Cut-off Time for Wednesday and Saturday is assumed to be 19:00 */

/* The Flow of the program is datecal is main function and lotto for the logic of the next draw, isDate to validate Date, isTime to validate Time  */

/*Validation are done for the available date and time*/

/*The Output is Returned for the Following Wednesday and Saturday 8PM*/


const lotto = (processDate) => {
  // Declaring the Weekday and Months as array because JS transforms as numbers
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const Months = ['January', 'Februrary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  // This Date Parameter d is used to return the DAY DATE MONTH YEAR 
  let d = new Date();
  // Checking for if input date is Wednesday or Saturday 
  if (processDate.getDay() === 3 || processDate.getDay() === 6) {
    //Checking for the Hour which acts as Cut-off Time and correspondingly date month and year is set and returned
    if (processDate.getHours() >= 19) {
      if (processDate.getDay() === 3) {
        d.setFullYear(processDate.getFullYear(), processDate.getMonth(), processDate.getDate() + 3);
      }
      else {
        d.setFullYear(processDate.getFullYear(), processDate.getMonth(), processDate.getDate() + 4);

      }
    }
    else {
      // If the Hours is less than 19 then set correspondingly date month and year
      d.setFullYear(processDate.getFullYear(), processDate.getMonth(), processDate.getDate());
    }
  }
  //if the Days in a week is between Sunday Monday Tuesday then set Date for Wednesday 
  else if (processDate.getDay() >= 0 && processDate.getDay() <= 2) {
    processDate.getDay() === 0 ? d.setFullYear(processDate.getFullYear(), processDate.getMonth(), processDate.getDate() + 3) : (processDate.getDay() === 1 ? d.setFullYear(processDate.getFullYear(), processDate.getMonth(), processDate.getDate() + 2) : setFullYear(processDate.getFullYear(), processDate.getMonth(), processDate.getDate() + 1));
  }
  else {
    //if the Days in a week is Thursday and Friday  then set Date for Saturday 
    processDate.getDay() === 4 ? d.setFullYear(processDate.getFullYear(), processDate.getMonth(), processDate.getDate() + 2) : processDate.getDay() === 5 ? d.setFullYear(processDate.getFullYear(), processDate.getMonth(), processDate.getDate() + 1) : ("Invalid Input Date or Time")
  }
  //return the set Date Month and Year which is set in the earlier in the above conditions
  return ("The next lottery draw is on " + days[d.getDay()] + " " + d.getDate() + " " + Months[d.getMonth()] + " " + d.getFullYear() + " at 8 PM");

}

// Date Validate Function
const isTime = (HH, MM) => {
  if ((HH >= 00 && HH <= 23) && (MM >= 00 && MM <= 59)) {
    return true;
  }
  else {
    return false;
  }
}

// Date Validate Function [Only Dates are Validated]
const isDate = (day, month, year) => {
  if (day == 0) {
    return false;
  }
  switch (parseInt(month)) {
    case 1: case 3: case 5: case 7: case 8: case 10: case 12:
      if (day > 31)
        return false;
      return true;
    case 2:
      if (year % 4 == 0)
        if (day > 29) {
          return false;
        }
        else {
          return true;
        }
      if (day > 28) {
        return false;
      }
      return true;
    case 4: case 6: case 9: case 11:
      if (day > 30) {
        return false;
      }
      return true;
    default:
      return false;
  }
}

const datecal = (inputData) => {
  if (inputData === undefined) {
    var processDate = new Date();
  }
  else {
    // Validating Date(YYYY-MM-DD) and Time(HH:MM:SS)
    let spltId = inputData.split(' ');
    let tempD = spltId[0].split('-');
    let tempT = spltId[1].split(':');
    //isDate function to validate Date
    if (isDate(tempD[2], tempD[1], tempD[0])) {
      if (isTime(tempT[0], tempT[1])) {
        var processDate = new Date(inputData);
      }
      else {
        return ("Invalid Time");
      }
    }
    else {
      //Invalid Date
      return ("Invalid Date");
    }
  }
  return lotto(processDate);
}

// The Time can supplied to datecal function or current time is considered 
// Provide the Date and Time in : "YYYY-MM-DD HH:MM:SS" 
console.log(datecal("2021-12-15 2488:45:56"));
//datecal();
