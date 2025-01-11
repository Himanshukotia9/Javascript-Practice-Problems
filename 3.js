// Conditional:

// Q3: Create a program that checks if a given year is a leap year.

let isLeapYear = (year) => {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return true;
    }
    else{
        return false;
    }
}

console.log(isLeapYear(1991));
console.log(isLeapYear(2000));
console.log(isLeapYear(2025));