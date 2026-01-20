const add = function(x, y) {
	z = x + y
  return z
};

const subtract = function(x, y) {
	z = x - y
  return z
};

const sum = function(array) {
	return array.reduce((total, current) => total + current, 0);
};

const multiply = function(array) {
  return array.reduce((x,y) => x * y);
};

const power = function(x,y) {
	return x**y;
};

const factorial = function(n) {
	let product = 1;
  for (let i=n; i>0; i--) {
    product *= i;
  }
  return product;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
