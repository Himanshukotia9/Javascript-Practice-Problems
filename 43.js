// Random Exercise

// Q43: Given two integers representing the numerator and denominator of a fraction, return the fraction in string format.

// Input: numerator = 1, denominator = 2
// Output: "0.5"

function fraction(numerator, denominator){
    const res = numerator / denominator;
    const result =  res.toString();
    return result;
}

console.log(fraction(1,2));
