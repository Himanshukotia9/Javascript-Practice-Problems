// String Manipulation

// Q1:  Write a function that takes a string and returns the reversed version of it.

let str = "Hello, World!!!"

function reverseString(str) {
    return str.split("").reverse().join("");
}

console.log(reverseString(str));