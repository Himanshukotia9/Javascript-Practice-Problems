// Q14: find sum of all the element in an array using the reduce() method.

let arr = [1,2,3,4,5,6,7,8,9,10];

let sumAll = arr.reduce((sum,current) => {
    return sum + current;
})
console.log(sumAll);