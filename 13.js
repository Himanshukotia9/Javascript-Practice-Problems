// Array Methods:

// Q13: Remove all occurrences of a specific element from an array.

let arr = [10,25,46,58,11,10,27,10,30,10];

let target = 10;

const removeOccurrence = (arr, target) => {
    return arr.filter(arr => arr !== target);
}
let revicedArr = removeOccurrence(arr,target);
console.log(revicedArr);