// Random Exercise

// Q36: Create a function that determines whether a number is Oddish or Evenish. A number is Oddish if the sum of all of its digits is odd, and a number is Evenish if the sum of all of its digits is even. If a number is Oddish, return "Oddish". Otherwise, return "Evenish".

function oddEven(num) {
    const digits = num.toString().split('').map(Number);
    const sum = digits.reduce((total, digits) => total + digits, 0);

    return sum % 2 === 0 ? 'Evenish' : 'Oddish'; 
}

console.log(oddEven(11800125));
console.log(oddEven(513));
console.log(oddEven(68));
