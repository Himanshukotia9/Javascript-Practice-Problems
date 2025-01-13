// Higher-Order Functions:

// Q10: Write a function that takes an array of numbers and returns a new array with only the even numbers.

let arr = [1,2,3,4,5,6,7,8,9,10];

function evenArray(arr) {
    let evenNums = arr.filter(num => num % 2 === 0);
    return evenNums;
}

console.log(evenArray(arr));
