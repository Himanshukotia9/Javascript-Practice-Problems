// Functions and Scope:

// Q9: Create a function that generates a random number between a given range.

function getRandom(min,max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(getRandom(50,100));
