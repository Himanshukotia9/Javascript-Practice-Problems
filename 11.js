// Higher-Order Functions:

// Q11: Use `map()` to double all the elements in an array.

let arr = [1,2,3,4,5,6,7,8,9,10]

const doubleArr = (arr) => {
    let double = arr.map((num) => num * 2);
    return double;
}

console.log(doubleArr(arr));