const sumAll = function(a, b) { //checks for variables
    if (!Number.isInteger(b)||!Number.isInteger(a)) return 'ERROR'; //checks if values are strings 
    if (a < 0 || b < 0) return 'ERROR'; //checks if values are negative integers
    if (a > b) { //switches values so 'a' is always less than 'b'
    const temp = a;
    a = b;
    b = temp;
  }

let sum = 0;
    for (let i=a; i<=b; i++) {
        sum += i; 
    }
return sum;
}

// Do not edit below this line
module.exports = sumAll;
