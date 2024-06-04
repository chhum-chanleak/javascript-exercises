const convertToCelsius = function(fahrenheit) {
  let celsius = ((5 * fahrenheit) - 160) / 9;

  return +celsius.toFixed(1);
};

const convertToFahrenheit = function(celsius) {
  let fahrenheit = ((9 * celsius) / 5) + 32;

  return +fahrenheit.toFixed(1);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
