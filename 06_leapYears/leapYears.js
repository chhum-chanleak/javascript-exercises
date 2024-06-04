const isLeapYear = (year) => {

  // Return 'false' when the inputted year is divisible by 4 or when the inputted year is both divisible by 100 and 400
  if (year % 4 === 0 && year % 100 === 0 && year % 400 === 0) {
    return true;
  } else if (year % 4 === 0 && year % 100 !== 0 && year % 400 !== 0) {
    return true;
}

  return false;
};

// Do not edit below this line
module.exports = isLeapYear;
