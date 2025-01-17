// Random Exercise

// Q39: Create a function that takes an array of numbers and return "Boom!" if the digit 7 appears in the array. Otherwise, return "there is no 7 in the array".
// for eg:
// sevenBoom([1, 2, 3, 4, 5, 6, 7]) ➞ "Boom!"
// // 7 contains the number seven.
// sevenBoom([2, 55, 60, 97, 86]) ➞ "Boom!"
// 97 contains the number seven.

function sevenBoom(arr){
    for(const num of arr){
        if(num.toString().includes("7")){
            return "Boom!";
        }
    }
        return "There is no 7 in this array"
}

console.log(sevenBoom([1,2,47,62,81,9,0]))