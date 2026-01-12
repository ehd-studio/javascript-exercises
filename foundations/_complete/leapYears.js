const leapYears = function(year) {
    //check for leap year rules
    const divisiblebyFour = year % 4 === 0;
    const divisiblebyHundred = year % 100 === 0;
    const divisiblebyFourHundred = year % 400 === 0;

    if (divisiblebyFour && (!divisiblebyHundred || divisiblebyFourHundred)) {
        return true;
    }else{
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;


//leap years rules: a/4='true', a/100='false' unless a/400='true'