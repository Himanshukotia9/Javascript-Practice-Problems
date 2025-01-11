// Conditional:

//Q2:  Write a function that checks if a number is even or odd and returns "Even" or "Odd" accordingly.



const checkEvenOdd = (num) => {
    if(num % 2 === 0){
        return "Even";
    }
    else{
        return "Odd";
    }
}

console.log(checkEvenOdd(5));
console.log(checkEvenOdd(51));
console.log(checkEvenOdd(562));