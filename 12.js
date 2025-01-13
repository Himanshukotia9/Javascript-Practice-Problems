// Array Methods:

// Q12 : Find the largest element in an array using the `reduce()` method.

const nums = [5,9,4,3,47,7,5,45,52,31,2]

const largest = nums.reduce((max, current) =>{
    return current < max ? max : current;
},nums[0]);

console.log(largest);