const convertToCelsius = function(celsius) {
  temp = (celsius - 32) / (9/5);
  rounded = Math.round(temp * 10) / 10;
  return rounded;
};
//equation C = (°F − 32) ÷ (9/5)

const convertToFahrenheit = function(fahrenheit) {
  temp = fahrenheit * 9/5 +32;
  rounded = Math.round(temp * 10) / 10;
  return rounded;
};
//equation °F = °C * 9/5 + 32

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
