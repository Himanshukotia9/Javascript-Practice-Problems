// Recursion

// Q18: Implement a recursive function to find the nth Fibonacci number.

function fibonacci(n){
    if(n === 0 ){
        return 0;
    }
    else if(n === 1){
        return 1;
    }
    else{
        return fibonacci(n-1) + fibonacci(n-2);
    }
}

console.log(fibonacci(6));
